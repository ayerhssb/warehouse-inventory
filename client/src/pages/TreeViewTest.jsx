import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css'; // Optional: add some basic styling

const TreeNode = ({ node, onNodeClick, children, loadMore }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
        if (!isExpanded && loadMore) {
            loadMore();
        }
    };

    return (
        <div style={{ marginLeft: '20px' }}>
            <div onClick={toggleExpand} style={{ cursor: 'pointer' }}>
                <span>{isExpanded ? '[-] ' : '[+] '}{node.name}</span>
            </div>
            {isExpanded && children}
        </div>
    );
};

const TreeViewTest = () => {
    const [locations, setLocations] = useState([]);
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [limit, setLimit] = useState(5);

    useEffect(() => {
        fetchLocations();
    }, [limit]);

    const fetchLocations = async () => {
        const response = await axios.get('/api/godowns');
        setLocations(response.data.slice(0, limit));
    };

    const fetchItems = async () => {
        const response = await axios.get(`/api/items`);
        setItems(response.data);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const handleLoadMore = () => {
        setLimit(limit + 5);
    };

    const renderTree = (nodes) => {
        return nodes.map((node) => (
            <TreeNode
                key={node.id}
                node={node}
                loadMore={handleLoadMore}
            >
                {node.children && renderTree(node.children)}
            </TreeNode>
        ));
    };

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '50%' }}>
                {renderTree(locations)}
                {limit < locations.length && (
                    <button onClick={handleLoadMore}>Load More</button>
                )}
            </div>
            <div style={{ width: '50%' }}>
                {selectedItem && (
                    <div className="item-details">
                        <h3>{selectedItem.name}</h3>
                        <p>Category: {selectedItem.category}</p>
                        <p>Price: ${selectedItem.price}</p>
                        <p>Status: {selectedItem.status}</p>
                        <p>Brand: {selectedItem.brand}</p>
                        <img src={selectedItem.image_url} alt={selectedItem.name} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default TreeViewTest;
