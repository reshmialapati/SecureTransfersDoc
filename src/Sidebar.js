import React, { useState } from "react";
import "./Sidebar.css";
import {
  FaChevronDown,
  FaChevronUp,
  FaChevronLeft,
  FaChevronRight,
  FaBook,
  FaLightbulb,
  FaFolder,
} from "react-icons/fa";

const Sidebar = ({
  selectedItem,
  setSelectedItem,
  isCollapsed,
  toggleSidebar,
}) => {
  const [expandedTopics, setExpandedTopics] = useState({});

  const topics = [
    {
      label: "INTRODUCTION",
      value: "INTRODUCTION",
      icon: <FaBook />,
      subItems: [{ label: "Key Features", value: "KeyFeatures" }],
    },
    {
      label: "PROJECTS",
      value: "PROJECTS",
      icon: <FaLightbulb />,
      subItems: [
        { label: "Key Purposes", value: "KeyPurposes" },

        {
          label: "Project Management",
          value: "ProjectManagement",
          subItems: [
            { label: "Project Creation", value: "ProjectCreation" },
            { label: "Change Ownership", value: "ChangeOwnership" },
            {
              label: "Modify File Retention Policy",
              value: "ModifyFileRetentionPolicy",
            },
            { label: "Upload project logo", value: "UploadProjectLogo" },
            { label: "Define help message", value: "DefineHelpMessage" },
            {
              label: "Generate Log Report",
              value: "GenerateLogReport",
              subsubItems: [
                { label: "Access via Admin UI", value: "AccessViaAdminUI" },
                {
                  label: "Via AuditingLogs folder",
                  value: "ViaAuditingLogFolders",
                },
              ],
            },
            { label: "Generate Audit Report", value: "GenerateAuditReport" },
          ],
        },
      ],
    },
    {
      label: "PARTNERS & FOLDERS",
      value: "PARTNERS&FOLDERS",
      icon: <FaFolder />,
      subItems: [
        { label: "Create Folder", value: "CreateFolder" },
        { label: "Create Partners", value: "CreatePartners" },
      ],
    },
  ];

  const toggleTopic = (topicValue) => {
    setExpandedTopics((prev) => ({ ...prev, [topicValue]: !prev[topicValue] }));
  };

  const renderTopics = (items) => {
    return items.map((item) => {
      const isExpanded = expandedTopics[item.value];
      const hasSubItems = item.subItems && item.subItems.length > 0;
      const hasSubSubItems = item.subItems && item.subItems.some(subItem => subItem.subsubItems && subItem.subsubItems.length > 0);

      return (
        <li key={item.value}>
          <div
              className={`topic ${isExpanded ? 'expanded' : ''} ${item.value === selectedItem ? 'selected' : ''}`}
              onClick={() => setSelectedItem(item.value)}
          >
            {isCollapsed ? item.icon : item.label}
            {(hasSubItems || item.subsubItems)&& !isCollapsed && (
              <button
                className="expand-button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleTopic(item.value);
                }}
              >
                {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            )}
          </div>
          {isExpanded && hasSubItems && !isCollapsed && (
            <ul className="subheadings">
              {renderTopics(item.subItems, isExpanded)}
            </ul>
          )}
          
          {isExpanded && item.subsubItems && !isCollapsed && (
            <ul className="subsubheadings">
              {renderTopics(item.subsubItems)}
            </ul>
          )}
        
        </li>
      );
    });
  };

  return (
    <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="index-home">
        <button className="collapse-button" onClick={toggleSidebar}>
          {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>
      <ul>{renderTopics(topics)}</ul>
    </aside>
  );
};

export default Sidebar;
