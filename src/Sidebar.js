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
  FaPlus,
  FaMinus
} from "react-icons/fa";

const Sidebar = ({
  selectedItem,
  setSelectedItem,
  isCollapsed,
  toggleSidebar,
}) => {
  const [expandedTopics, setExpandedTopics] = useState({});
  const [expandAll, setExpandAll] = useState(false);

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
      label: "FOLDERS",
      value: "FOLDERS",
      icon: <FaFolder />,
      subItems: [
        {
          label: "Organizing and Managing Folders",
          value: "OrganizingandManaging",
        },
        {
          label: "Creating and Managing Partners and Folders",
          value: "CreatePartnersFolders",
        },
        { label: "Create Folders", value: "CreateFolder" },
        { label: "Create Partners", value: "CreatePartners" },
        { label: "Assign Folder Access Privileges", value: "FolderAccess" },
        { label: "Changing Folder Types", value: "ChangingFolderTypes" },
        { label: "Folder Branding", value: "FolderBranding" },
        { label: "Folder Access Controls", value: "FolderAccessControls" },
        { label: "Data at Rest Protection", value: "DataatRestProtection" },
        { label: "Folder Comments", value: "FolderComments" },
        { label: "Folder Verification", value: "FolderVerification" },
        { label: "Troubleshooting Failures", value: "TroubleshootingFailures" },
        {
          label: "Transferring Files",
          value: "TransferringFileswithSecureTransfers",
          subItems: [
            { label: "SFTP File Transfers", value: "SFTPFileTransfers" },
            { label: "FTPS File Transfers", value: "FTPSFileTransfers" },
            {
              label: "Web Browser File Transfers",
              value: "WebBrowserFileTransfers",
            },
          ],
        },
      ],
    },
    {
      label: "INTERFACE MANAGEMENT",
      value: "INTERFACEMANAGEMENT",
      icon: <FaFolder />,
      subItems: [
        {
          label: "Key Functions of Interfaces",
          value: "KeyFunctions",
        },
        {
          label: "Security and Compliance",
          value: "SecurityandCompliance",
        },
        {
          label: "Configuring Interface",
          value: "ConfiguringInterface",
          subItems: [
            { label: "Interface Setup", value: "InterfaceSetup" },
            { label: "File Management and Retention", value: "FileManagementRetention" },
            { label: "Compression Settings", value: "CompressionSettings",},
            { label: "Cryptographic Configurations", value: "CryptographicConfigurations",},
            { label: "Signature Management", value: "SignatureManagement",},
            { label: "Sequencing Files", value: "SequencingFiles",},
            { label: "Transfer Scheduling", value: "TransferScheduling"},
          ],
        },
        {
          label: "Class Pull Interface",
          value: "classPullInterface"
        },
        {
          label:"Steps to Set up a Class Pull Interface",
          value:"setupClassPullInterface",
          subItems: [
            { label: "Interface Setup", value: "CPInterfaceSetup" },
            { label: "Managing File Handling Options", value: "ManagingFile" },
            { label: "Scheduling File Transfers", value: "SchedulingFileTransfers",},
            { label: "Ad-Hoc Scheduling", value: "AdHocScheduling",},
          ]
        },
        {
          label:"Advanced Interface Configuration",
          value:"AdvancedInterfaceConfiguration",
          subItems: [
            { label: "Sequence Validation", value: "SequenceValidation" },
            { label: "Inactivity Detection", value: "InactivityDetection" },
            { label: "Time Based File Processing", value: "TimeBasedFileProcessing",},
            { label: "Ad-Hoc Scheduling", value: "AdvancedAdHocScheduling",},
          ]
        },
        {
          label:"Interface Cryptography Features",
          value:"InterfaceCrypto"
        }
      ],
    },
  ];

  const toggleTopic = (topicValue) => {
    setExpandedTopics((prev) => ({ ...prev, [topicValue]: !prev[topicValue] }));
  };

  const toggleAllTopics = () => {
    const newExpandState = !expandAll;
    setExpandAll(newExpandState);

    const newExpandedTopics = {};
    topics.forEach((topic) => {
      newExpandedTopics[topic.value] = newExpandState;
      if (topic.subItems) {
        topic.subItems.forEach((subItem) => {
          newExpandedTopics[subItem.value] = newExpandState;
          if (subItem.subsubItems) {
            subItem.subsubItems.forEach((subsubItem) => {
              newExpandedTopics[subsubItem.value] = newExpandState;
            });
          }
        });
      }
    });

    setExpandedTopics(newExpandedTopics);
  };

  const renderTopics = (items) => {
    return items.map((item) => {
      const isExpanded = expandedTopics[item.value];
      const hasSubItems = item.subItems && item.subItems.length > 0;
      const hasSubSubItems =
        item.subItems &&
        item.subItems.some(
          (subItem) => subItem.subsubItems && subItem.subsubItems.length > 0
        );

      return (
        <li key={item.value}>
          <div
            className={`topic ${isExpanded ? "expanded" : ""} ${
              item.value === selectedItem ? "selected" : ""
            }`}
            // onClick={() => setSelectedItem(item.value)}
            onClick={() => {
              setSelectedItem(item.value);
              toggleTopic(item.value);
            }}
          >
            {isCollapsed ? item.icon : item.label}
            {(hasSubItems || item.subsubItems) && !isCollapsed && (
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
            <ul className="subheadings">{renderTopics(item.subItems)}</ul>
          )}

          {isExpanded && item.subsubItems && !isCollapsed && (
            <ul className="subsubheadings">{renderTopics(item.subsubItems)}</ul>
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

        <button className="expand-collapse-all" onClick={toggleAllTopics}>
          {expandAll ? <FaMinus /> : <FaPlus />}
        </button>
        
      </div>
     

      <ul>{renderTopics(topics)}</ul>
    </aside>
  );
};

export default Sidebar;
