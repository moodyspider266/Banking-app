import React from 'react';
import "../components_styling/Sidebar.css";

const Sidebar = () => {
  const options = [
    { name: 'Dashboard', icon: 'dashboard', link: '/dashboard' },
    { name: 'Transactions', icon: 'transactions', link: '/transactions' },
    { name: 'Accounts', icon: 'accounts', link: '/accounts' },
    { name: 'Investments', icon: 'investments', link: '/investments' },
    { name: 'Credit Cards', icon: 'credit-cards', link: '/credit-cards' },
    { name: 'Loans', icon: 'loans', link: '/loans' },
    { name: 'Services', icon: 'services', link: '/services' },
    { name: 'My Privileges', icon: 'privileges', link: '/privileges' },
    { name: 'Settings', icon: 'settings', link: '/settings' },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        {/* <img src={logo} alt="Logo" /> */}
        <h1>Logo</h1>
      </div>
      <div className="sidebar-options-container">
        <ul className="sidebar-options">
          {options.map((option) => (
            <li key={option.name} className="sidebar-option">
                <a href={option.link}>
                    <span className={`sidebar-option-icon ${option.icon}`}></span>
                    <span className="sidebar-option-name">{option.name}</span>
                </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;