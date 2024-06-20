import React, { useState } from "react";
import "./Sidebar.css";
import {
  FaChevronDown,
  FaChevronUp,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { TbSquareRoundedChevronRightFilled } from "react-icons/tb";
import { TbSquareRoundedChevronLeftFilled } from "react-icons/tb";

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
      icon: (<img src="introduction.png" alt="intro" className={isCollapsed ? "collapsed-icon" : "expanded-icon"} style={{height:"27px",width:"26px",marginLeft:"15px"}} />),
      subItems: [
        { label: "Key Features", value: "KeyFeatures" },
        { label: "SecureTransfers Platform", value: "SecureTransfersPlatform" },
        { label: "Secure Store", value: "SecureStore" },
        { label: "Secure Automation", value: "SecureAutomation" },
      ],
    },
    {
      label: "PROJECTS",
      value: "PROJECTS",
      icon: (<img src="projects.png" alt="img" className={isCollapsed ? "collapsed-icon" : "expanded-icon"} style={{height:"27px",width:"26px",marginLeft:"15px"}}/>),
      subItems: [
        { label: "Key Purposes", value: "KeyPurposes" },

        {
          label: "Project Management",
          value: "ProjectManagement",
          subItems: [
            { label: "Project Creation", value: "ProjectCreation" },
            { label: "Change Ownership", value: "ChangeOwnership" },
            { label: "Uploading a Custom Logo", value: "UploadProjectLogo" },
            { label: "Define help message", value: "DefineHelpMessage" },
            {
              label: "Generate an Activity Log Report",
              value: "GenerateLogReport",
              subsubItems: [
                { label: "Access via Admin UI", value: "AccessViaAdminUI" },
                { label: "Via AuditingLogs folder",value: "ViaAuditingLogFolders"},
              ],
            },
            { label: "Generate Audit Report", value: "GenerateAuditReport" },
          ],
        },
      ],
    },
    {
      label: "USERS",
      value: "USERS",
      icon: (<img src="user.png" alt="img" className={isCollapsed ? "collapsed-icon" : "expanded-icon"} style={{height:"27px",width:"26px",marginLeft:"15px"}}/>),
     
      subItems: [
        { label: "User Types ", value: "UserTypes" },
        {
          label: "User Management",
          value: "UserManagement",
          subItems: [
            { label: "Creating a User", value: "createuser" },
            { label: "Updating a User", value: "updateuser" },
            { label: "Activating a User", value: "activateuser" },
            { label: "Configuring Extended Controls", value: "configurecontrols" },
            { label: "Deleting a User", value: "deleteuser" },
            { label: "Validating User Folder Access", value: "validatefolderaccess" },
            { label: "ADSecurityGroup", value: "ADSecurityGroup" },
            { label: "SSH-2 Key Based Access Control", value: "SSH2KeyAccess" },
            { label: "SSH-2 Key Type, Length & Strength Validation", value: "SSH2KeyValidation" },
            { label: "Resetting a User Password", value: "resettingpassword" },
            {label: "Suspending and Resuming User Accounts", value: "useraccounts"}
          ],
        },
      ],
    },
    {
      label: "FOLDERS",
      value: "FOLDERS",
      icon: (<img src="folder.png" alt="interface" className={isCollapsed ? "collapsed-icon" : "expanded-icon"} style={{height:"23px",width:"25px",marginLeft:"15px"}}/>),
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
      icon: (<img src="interface.png" alt="interface" className={isCollapsed ? "collapsed-icon" : "expanded-icon"} style={{height:"23px",width:"25px",marginLeft:"15px"}}/>),
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
            {
              label: "File Management and Retention",
              value: "FileManagementRetention",
            },
            { label: "Compression Settings", value: "CompressionSettings" },
            {
              label: "Cryptographic Configurations",
              value: "CryptographicConfigurations",
            },
            { label: "Signature Management", value: "SignatureManagement" },
            { label: "Sequencing Files", value: "SequencingFiles" },
            { label: "Transfer Scheduling", value: "TransferScheduling" },
          ],
        },
        {
          label: "Class Pull Interface",
          value: "classPullInterface",
        },
        {
          label: "Steps to Set up a Class Pull Interface",
          value: "setupClassPullInterface",
          subItems: [
            { label: "Interface Setup", value: "CPInterfaceSetup" },
            { label: "Managing File Handling Options", value: "ManagingFile" },
            {
              label: "Scheduling File Transfers",
              value: "SchedulingFileTransfers",
            },
            { label: "Ad-Hoc Scheduling", value: "AdHocScheduling" },
          ],
        },
        {
          label: "Advanced Interface Configuration",
          value: "AdvancedInterfaceConfiguration",
          subItems: [
            { label: "Sequence Validation", value: "SequenceValidation" },
            { label: "Inactivity Detection", value: "InactivityDetection" },
            {
              label: "Time Based File Processing",
              value: "TimeBasedFileProcessing",
            },
            { label: "Ad-Hoc Scheduling", value: "AdvancedAdHocScheduling" },
          ],
        },
        {
          label: "Interface Cryptography Features",
          value: "InterfaceCrypto",
        },
        {
          label: "Example Scenarios",
          value: "UseCases",
        },
        {
          label: "PGP Features",
          value: "PGPFeatures",
          subItems: [
            {
              label: "Sending Encrypted Files to Partner",
              value: "SendingEncryptedFiles",
            },
            {
              label: "Receiving Encrypted Files from Partner",
              value: "ReceivingEncryptedFiles",
            },
            { label: "PGP Troubleshooting", value: "PGPTroubleshooting" },
          ],
        },
        {
          label: "File Actions for PULL Interfaces",
          value: "FileActions",
          subItems: [
            {
              label: "File Compression and Decompression Features",
              value: "FileCDFreatures",
            },
            {
              label: "Multi-File Unzip for PULL Interfaces",
              value: "MultiFileUnzip",
            },
          ],
        },
        {
          label: "Combined Configuration Example",
          value: "CombinedConfigurationExample",
        },
        {
          label: "Encrypted Storage",
          value: "EncryptedStorage",
          subItems: [
            { label: "Detailed Features", value: "DetailedFeatures" },
            { label: "Configuration Steps", value: "ConfigurationSteps" },
          ],
        },
        {
          label: "Guide to Configuring Partners",
          value: "GuidetoConfiguringPartners",
        },
        {
          label: "Host Protocols and Their Parameters",
          value: "HostProtocols",
        },
        { label: "Additional Settings", value: "AdditionalSettings" },
        {
          label: "Core Configuration Parameters",
          value: "CoreConfigurationParameters",
        },
        {
          label: "Host Protocols and Their Usage",
          value: "HostProtocolsUsage",
        },
        { label: "Security Notes", value: "SecurityNotes" },
        {
          label: "Adding a Partner with SFTP Protocol",
          value: "addpartnerwithsftp",
        },
        {
          label: "Adding a Partner with AWS S3 Protocol",
          value: "addpartnerwithaws",
        },
        {
          label: "Configure a Pull Interface from the Partners Tab",
          value: "PullInterfacePartnersTab",
        },
        {
          label: "Configure a Push Interface from the Partners Tab",
          value: "PushInterfacefromPartners",
        },
        { label: "Transfer Groups", value: "transferGroups" },
        {
          label: "Setting Transfer Group Send Order",
          value: "SettingTGSendOrder",
        },
      ],
      
    },
    {
      label: "MONITORING",
      value: "MONITORING",
      icon: (<img src="monitoring.png" alt="interface" className={isCollapsed ? "collapsed-icon" : "expanded-icon"} style={{height:"23px",width:"25px",marginLeft:"15px"}}/>),
      subItems: [
        {label: "Defining a File Transaction Filter",value: "definefilefilter"},
        {label: "Viewing File Transaction Details",value: "viewfile"},
        {label: "Downloading Received File Transactions",value: "downloadfile"},
        {label: "Viewing Partner Activities", value: "viewpartner",},
        {label: "Downloading Partner Application Log Files", value: "downloadpartner",},
        {label: "Viewing Partner Statistics", value: "viewpartnerstats",},
        {label:"Document Status Overview", value: "DocStatus"},
        {label:"Action Buttons", value: "ActionButtons"},
        {label:"Reprocessing Unrecognized File Transactions", value: "reprocessingfile"},
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
      <button
        className="collapse-button"
     
        onClick={toggleSidebar}>
       
          {isCollapsed  ? (
                <TbSquareRoundedChevronRightFilled className='gricon' size={32} />
              ) : (
 
                <TbSquareRoundedChevronLeftFilled className='lricon' size={32} />
              )} 
        </button>
        {!isCollapsed && (
          <button className="expand-collapse-all" onClick={toggleAllTopics}>
            {expandAll ? <FaMinus /> : <FaPlus />}
          </button>
        )}
      </div>

      <div style={{marginTop:isCollapsed?"95%":"10%"}}>
      <ul>{renderTopics(topics)}</ul>
      </div>
    </aside>
  );
};

export default Sidebar;
