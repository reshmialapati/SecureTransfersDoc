import React from "react";
import "./MainContent.css"; // Assuming you'll add some CSS for highlighting
import Footer from "./Footer";

function MainContent({ selectedItem, searchTerm }) {
  const content = {
    Home: {
      image: "/Picture1.png",
    },
    INTRODUCTION: {
      heading: "Introduction to Secure Transfers",
      paragraphs: [
        "Secure Transfers is an advanced Managed File Transfer (MFT) tool designed to provide secure, reliable, and automated file transfer capabilities. Tailored for modern enterprise needs, Secure Transfers facilitates seamless data exchange between internal and external partners, staff members, machines, and servers, supporting various transfer patterns including Business-to-Business (B2B), Machine-to-Machine (M2M), Human-to-Human (H2H), and Group-to-Group (G2G).",
        "Secure Transfers offers a comprehensive suite of features aimed at ensuring data security and integrity throughout the file transfer process. With its user-friendly interface and robust security measures, Secure Transfers helps organizations reduce operational costs, enhance the quality of data transmissions, and comply with stringent regulatory requirements.",
      ],
    },
    KeyFeatures: {
      heading: "Key Features of Secure Transfers",
      paragraphs: [
        "Secure Transfers is designed to meet the diverse needs of modern enterprises, providing a reliable and secure platform for managing file transfers. Its robust feature set and intuitive interface make it an ideal solution for automating workflows, ensuring data security, and enhancing operational efficiency.",
      ],
      bulletPoints: [
        "Multi-Platform Support: Secure Transfers operates on multiple platforms including Windows, Linux, UNIX, and Mac OS, ensuring flexibility and compatibility with existing IT infrastructure.",
        "Browser-Based Interface: The tool includes a web-based administrator interface with a customizable dashboard, advanced graphical components, and drag-and-drop functionality for ease of use.",
        "Protocol Support: Secure Transfers supports a wide range of file transfer protocols such as SFTP, FTP/S, HTTP/S, and AS2, enabling secure and efficient data exchange.",
        "Encryption and Security: Protects files both at rest and in motion with AES256 encryption, ensuring data remains secure throughout the transfer process.",
        "Centralized Control and Auditing: Logs all file transfer activities in a central database, providing detailed audit trails and generating comprehensive management reports.",
        "High Availability and Load Balancing: Supports clustering for high availability and load balancing, ensuring continuous operation and efficient resource utilization.",
        "Role-Based Access Control: Implements extensive security controls and role-based permissions to manage user access and maintain data integrity.",
        "Integration with Enterprise Systems: Connects to various enterprise systems, databases, and messaging systems, facilitating seamless integration and workflow automation.",
        "Automated and Ad-Hoc File Transfers: Supports browser-based file transfers, secure email notifications, and document collaboration across devices.",
      ],
      // image: "https://via.placeholder.com/150",
    },
    PROJECTS: {
      heading: "Introduction to Projects",
      paragraphs: [
        "A project serves as a crucial organizational unit for managing specific file transfer activities, workflows, and tasks. Projects are essential for organizing, managing, and securing file transfer activities. They provide a structured approach to handle various tasks, enhance security, facilitate monitoring, and ensure efficient resource utilization. By leveraging projects, you can streamline your file transfer processes and effectively meet specific operational and compliance requirements.",
      ],
      // image: "https://via.placeholder.com/150",
    },
    KeyPurposes: {
      heading: "Key Purposes of a Project in Secure Transfers",
      paragraphs: [
        "Organization and Segmentation:Projects enable you to group related file transfer tasks, which is especially useful when managing multiple simultaneous file transfers. Different departments or teams can maintain their own projects, ensuring the separation of their file transfer activities from others.",
        "Workflow Management and Automation: Projects help you coordinate various tasks involved in file transfers, such as encryption, compression, scheduling, and notification. You can establish automated workflows to handle recurring file transfers, enhancing efficiency and reducing the need for manual intervention.",
        "Access Control, Security, and Customization: Projects allow you to assign specific roles and permissions to users, ensuring that only authorized personnel can access and manage the files and tasks within a project. Enhanced security measures, including user authentication, encryption protocols, and access restrictions, can be applied at the project level. Different projects may have varying requirements in terms of file transfer protocols, security settings, and notifications, allowing for customization to meet specific needs.",
        "Monitoring, Reporting, and Resource Management:Projects maintain detailed logs of all activities, providing an audit trail for file transfers, which is crucial for compliance and troubleshooting. You can generate reports on project activities to monitor performance and identify issues. Projects help you manage resources, such as storage and bandwidth, by allocating them appropriately to different tasks and users, enabling cost management and optimization.",
      ],
      // image: "https://via.placeholder.com/150",
    },

    ProjectManagement: {
      heading: "Project Management",
      paragraphs: [
        "As a Primary or Secondary Owner, you have the ability to add, modify, and manage various aspects of a project.",
      ],
    },
    ProjectCreation: {
      heading: "Project Creation",
      paragraphs: [
        "To create a new project, follow these steps:",
        "1.	Click on +Projects to initiate the creation of a new project.",
        "2. Switch to Managers tab to add Primary owner and Secondary owners.",
        "3. Click Save to create a new project.",
        "FIELDS: Fields marked with * are mandatory.",
      ],
      //image: "https://via.placeholder.com/150",
      bulletPoints: [
        "Name*: Provide a unique name for your project, using any combination of characters. Ensure that each project name is distinct, as duplicate names are not allowed. Please note that once a project name is created, it cannot be changed.",
        "Quota*: Specify the required amount of space for your project in GB. This defines how much space is allocated to the project. Once the allocated space is full, transfers will not work. Make sure to allocate enough space based on project usage to avoid transfer failures in the future.",
        "Retention*: Set the number of retention days for files in the project based on the project requirements. After the retention period, files will be deleted and cannot be retrieved.",
        "Cost Center*: Provide the cost center code associated with your department. A cost center is a department or function within an organization that incurs costs but does not directly generate revenue. It is essential for tracking expenses, managing budgets, and improving resource allocation and financial accountability. This code helps your organization keep track of project expenses.",
        "Primary Owner*: Search for the employee using their Employee ID and add them to the Primary Owner field. The Primary Owner will be responsible for the project and will have full access to the project and its configurations. They can make changes and add or modify Primary and Secondary Owners.",
        "Secondary Owners*: Secondary Owner will be the second in line and responsible for any changes required in the absence of the Primary Owner. The Secondary Owner will be the first point of contact in the absence of the Primary Owner. They will have similar access as the Primary Owner, except they cannot change the Primary Owner but can add or delete other Secondary Owners.",
      ],
    },
    ChangeOwnership: {
      heading: "Change ownership, including Primary and Secondary owners",
      paragraphs: [
        "To change owners for a project in Secure Transfers, follow these steps:",
        "Navigate to the appropriate tab Go to the tab where you can manage project owners and delegates.",
        "Select the Option: Use the provided buttons to change owners. Depending on your selection, additional pop-up windows will appear with corresponding fields and controls.",
        "To Link New Owner Enter the EmployeeID of the new owner.Ensure to save the changes after making the updates.",
        "Note:",
      ],
      bulletPoints: [
        "Newly added owners will receive a Welcome email from the Secure Transfers platform, prompting them to activate their accounts and enabling access.",
        "Owners who are removed will be notified that their access has been revoked.",
      ],
    },
    ModifyFileRetentionPolicy: {
      heading: "Modify the file retention policy",
    },
    UploadProjectLogo: {
      heading: "Upload a Project Logo",
      paragraphs: [
        "To upload a custom logo for your project in Secure Transfers, follow these steps:",
        "Navigate to the Logo Tab: Projects without a custom logo will automatically be assigned a default logo.",
        "Upload the Logo: Click the Upload Logo button.Select the logo file you wish to upload and confirm your selection.Verify that the uploaded logo is displayed correctly.",
        "Save the Changes: Click the Save button to apply the changes.",
        "Logo Specifications: Logos should ideally be 300(w) x 100(h) pixels. Accepted formats are jpg, gif, or png.",
        "Note:",
      ],
      bulletPoints: [
        "The Save button will be inactive (grayed out) if mandatory data is missing. In such cases, navigate to the appropriate tab and update the mandatory fields before proceeding.",
      ],
    },
    DefineHelpMessage: {
      heading: "Define a project-specific help message",
      paragraphs: [
        "Navigate to the TAB and enter the support mailbox in the designated field.",
        "The support mailbox will be used by partners to connect with your project-specific support team. Typically, an externally accessible distribution list (DL) is used.By defining a support mailbox, all support emails will be sent to the specified support email (DL) instead of the project administrators.",
        "Next, set the custom help text in the appropriate field.",
        "This customized help message will enhance and improve your project-specific service communication as seen by end-users when they click the help option.",
        "Ensure you save the changes after making these updates.",
        "Below is an example of the resulting custom help message accessible to partners.",
      ],
    },
    GenerateLogReport: {
      heading: "Generate an activity log report",
      paragraphs: [
        "The Secure Transfers platform tracks partner activity, particularly file uploads, downloads, and deletions.",
      ],
    },
    AccessViaAdminUI: {
      heading: "Access via Secure Transfers Admin UI",
      paragraphs: [
        "Navigate to the Logging section and select Activity Log.",
        "Search Activity Logs",
        "In the Activity Log screen, enter your search criteria.",
        "Click the Search button.",
        "The system will return all matching records, detailing file-related activities such as who performed the action, what was done, and when it occurred. This includes reports on delete (DELE), store (STOR), and retrieve (RETR) activities performed by partners on specific projects and folders.",
      ],
    },
    ViaAuditingLogFolders: {
      heading: "Access Via Auditing Logs folder",
      paragraphs: ["To access and verify audit logs, follow these steps:"],
      bulletPoints: [
        "Start the Browser Client: As an owner or delegate, use a browser client (preferably Chrome, Firefox, or Safari) and navigate to the public Secure Transfers Access Points (POPs)",
        "Log In: Use your EmployeeID login credentials to log in at the login screen.",
        "Locate the Audit Logs Folder: Find the relevant project-specific <project name>_AuditingLogs folder and select this folder.",
        "This folder contains zip files of all file transactions for the specified project on specific days. The folder is continuously updated with new files appended daily. Note that it is not automatically cleaned.",
        "Manage Folder Content: It is the project admin's responsibility to maintain the content of this folder, including deleting or cleaning log files as necessary.",
        "Download and Review Logs: Download the zip files to your local PC or laptop.",
        "Unzip the content and use a file editor, Excel, or other tools to validate file exchange activity for the day, week, month, etc.",
      ],
    },
    OrganizingandManaging: {
      heading: "Organizing and Managing Folders",
      paragraphs: [
        "SecureTransfers provides a range of Folder options designed to meet diverse storage and file management requirements.These diverse Folder types ensure that SecureTransfers can cater to a wide array of storage and file handling needs, providing users with secure, efficient, and flexible solutions.",
      ],
      bulletPoints: [
        "Retention Folder: This option leverages on-premises storage infrastructure, featuring a configurable retention period, with a default setting of 90 days. Files are automatically deleted after the retention period expires, ensuring efficient space management. Additionally, it offers optional Data@Rest encryption for enhanced security of stored data.",
        "Permanent Folder: Ideal for scenarios where file retention is crucial, this eFolder type provides on-premises storage without automatic file deletion. Users can benefit from optional Data@Rest encryption to protect sensitive information.",
        "Event Flow Folder: This folder type is optimized for automation, supporting rule-based file transfers. It streamlines workflows by automating repetitive tasks and ensuring files are transferred according to predefined rules.",
        "AWS S3 Folder: Leveraging AWS S3 cloud storage, this option provides scalable and highly durable storage solutions. It is ideal for applications requiring flexible and reliable cloud-based storage.",
        "Glacier Folder: This eFolder type uses AWS Glacier for economical long-term file archiving. It is suited for storing data that is infrequently accessed but requires long-term retention at a low cost.",
        "Exchange Folder: This option connects to MS Exchange hosted mailboxes, enabling the automated extraction of email attachments. The extracted files are then securely stored in SecureTransfers Retention Folders, facilitating easy access and management.",
        "SharePoint Folder: Integrates with Microsoft SharePoint Online, allowing users to leverage SharePoint’s robust document management and collaboration features. It is perfect for organizations looking to enhance team collaboration and document workflows.",
        "Azure Blob Folder: This option utilizes Azure Blob Storage, offering a flexible, scalable, and cost-effective cloud storage solution. It is well-suited for applications requiring high availability and durability of stored data.",
        "GCP Folder: Leveraging Google Cloud Platform storage, this eFolder provides a robust and secure cloud storage solution. It is ideal for applications needing scalable and efficient cloud-based storage with easy integration into GCP services.",
      ],
    },
    CreatePartnersFolders: {
      heading: "Creating and Managing Partners & Folders",
      paragraphs: [
        "As an administrator for SecureTransfers, it is essential to efficiently create, update, and delete folders and partners, as well as assign and manage folder access privileges. These tasks ensure smooth file exchanges between partners, systems, and servers using the SecureTransfers platform.",
      ],
      bulletPoints: [
        "Retention Folder: This option leverages on-premises storage infrastructure, featuring a configurable retention period, with a default setting of 90 days. Files are automatically deleted after the retention period expires, ensuring efficient space management. Additionally, it offers optional Data@Rest encryption for enhanced security of stored data.",
        "Permanent Folder: Ideal for scenarios where file retention is crucial, this eFolder type provides on-premises storage without automatic file deletion. Users can benefit from optional Data@Rest encryption to protect sensitive information.",
        "Event Flow Folder: This folder type is optimized for automation, supporting rule-based file transfers. It streamlines workflows by automating repetitive tasks and ensuring files are transferred according to predefined rules.",
        "AWS S3 Folder: Leveraging AWS S3 cloud storage, this option provides scalable and highly durable storage solutions. It is ideal for applications requiring flexible and reliable cloud-based storage.",
        "Glacier Folder: This eFolder type uses AWS Glacier for economical long-term file archiving. It is suited for storing data that is infrequently accessed but requires long-term retention at a low cost.",
        "Exchange Folder: This option connects to MS Exchange hosted mailboxes, enabling the automated extraction of email attachments. The extracted files are then securely stored in SecureTransfers Retention Folders, facilitating easy access and management.",
        "SharePoint Folder: Integrates with Microsoft SharePoint Online, allowing users to leverage SharePoint’s robust document management and collaboration features. It is perfect for organizations looking to enhance team collaboration and document workflows.",
        "Azure Blob Folder: This option utilizes Azure Blob Storage, offering a flexible, scalable, and cost-effective cloud storage solution. It is well-suited for applications requiring high availability and durability of stored data.",
        "GCP Folder: Leveraging Google Cloud Platform storage, this eFolder provides a robust and secure cloud storage solution. It is ideal for applications needing scalable and efficient cloud-based storage with easy integration into GCP services.",
      ],
    },
    GenerateAuditReport: {
      heading: "Generate a project configuration and access audit report",
      paragraphs: ["Generate a project configuration and access audit report."],
    },
    FOLDERS: {
      heading: "Folders",
      paragraphs: [
        "As a SecureTransfers Administrator, it is essential to efficiently create, update, and delete folders and partners, as well as assign and manage folder access privileges. These tasks ensure smooth file exchanges between partners, systems, and servers using the SecureTransfers platform.Generate a project configuration and access audit report.",
      ],
      // image: "https://via.placeholder.com/150",
    },
    CreateFolder: {
      heading: "Create a Shared Electronic Folder (eFolder)",
      paragraphs: ["Steps to create a Folder."],
      bulletPoints: [
        "Open the web browser and navigate to the SecureTransfers Admin console. Log in using your Network/NT-ID credentials.",
        "Select your project and click Display Project Folders to view the My Folders screen.",
        "Click the New Folder button to open the popup window.",
        "Enter a name for the folder (e.g., ProjectFiles) and select the appropriate folder type from the dropdown menu.",
        "Optionally, enable any necessary settings such as Encrypted Storage and click Save to store the configuration.",
        "The newly created folder will now appear in the My Folders screen.",
      ],
      image: "/createFolder.png",
    },
    CreatePartners: {
      heading: "Create a New Partner",
      paragraphs: ["Steps to create a Partner."],
      bulletPoints: [
        "Navigate to the Users Tab: Go to the Secure Store section. Then Click on the “Users” tab.",
        "Add a New User: Look for the “+Create User” button and click on it.",
        "Fill in User Details: Provide the necessary information for the new user, such as their name, email address, and role.",
        "Save Changes: Save the user details by clicking the “Save” button. If the user already exists, simply search for their name, and assign them to your Folder(s).",
      ],
      image: "/createPartners.png",
    },
    FolderAccess: {
      heading: "Assign Folder access privilages",
      paragraphs: [
        "Option 1: When you are in the “Create Partner” screen, look for the “Save & Go to Folder Accesses” icon. Clicking on this icon allows you to assign folder access privileges for the given user to specific folders.  Now, click on “Select and Add Folders” to choose the folders you want to configure. Assign access privileges using the tick boxes provided. You can either hit “Save” to finalize your settings or click “Select & Add Folders” to include additional ones. Always remember to complete the process by clicking “Save“ to ensure all changes are saved properly.",
      ],
      bulletPoints: [
        "Folder Naming Conventions: Folder names should include a valid combination of numeric (0-9), alphanumeric (A-Z, a-z), and underscore (_) characters. If starting with a numeric value, ensure the folder name contains at least one alphanumeric character.",
        "Allowed: Docs_001, Reports_2023,",
        "Data_A1, Not Allowed: 123",
      ],
    },
    ChangingFolderTypes: {
      heading: "Changing Folder Types",
      paragraphs: [
        "You can change the folder types for SecureTransfers Retention, EventFlow, and Permanent Folders. However, changing types for S3, Azure, or HDFS folders is not supported due to specific metadata requirements. To change a folder type:",
      ],
      bulletPoints: [
        "Activate Edit Function: Navigate to the desired folder using filtering controls. Look for the “Edit Folder Access” control ",
        "Update Folder Type:In the popup window, update the folder type and click “Save”.",
        "For SecureTransfers folders with “Encrypted Storage” remove exclamation option before changing the folder type.",
      ],
      image: "/changeFolder.png",
    },
    FolderComments: {
      heading: "Folder Comments",
      paragraphs: [
        "Administrators can add comments to Folders for tagging, messaging, or providing additional information relevant to project administrators.",
        "Steps to add Folder Comments:",
      ],
      bulletPoints: [
        "Navigate to the desired folder using filtering controls.",
        "Look for the “Edit Folder Access” control .",
        "Navigate to the Comments tab and enter comments in the provided field. Save the changes.",
      ],
      image: "/folderComments.png",
    },
    FolderBranding: {
      heading: "Folder Branding",
      paragraphs: [
        "SecureTransfers supports folder branding, allowing you to display project-specific logos in the SecureTransfers browser. This feature enhances project visibility and recognition.",
      ],
      bulletPoints: [
        "Select Folder and Edit:",
        "Navigate to the desired folder using filtering controls.",
        "Look for the “Edit Folder Access” control ",
        "Navigate to the “Logo” tab.",
        "Upload Logo: Upload the desired logo and save the changes. Note that custom logos can impact UI performance, so use this feature judiciously.",
      ],
      image: "/folderBranding.png",
    },
    FolderAccessControls: {
      heading: "Folder Access Controls",
      paragraphs: [
        "SecureTransfers offers three types of folder access: “Read-Only,” and “Upload-Only,” Each type grants different permissions, ensuring appropriate access levels for different users.",
      ],
      bulletPoints: [
        "Read-Only: Allows downloads and file listing.",
        "Upload-Only: Allows uploads and directory listing. ",
        "Full-Access: Grants all permissions, including reading, writing, renaming, and deleting files.",
        "Upload Logo: Upload the desired logo and save the changes. Note that custom logos can impact UI performance, so use this feature judiciously.",
        "To optimize performance, limit the number of folders assigned to a user to fewer than 10, with a maximum suggested limit of 20. Exceeding this can slow down the UI response and login times, especially for cloud storage Folders.",
        "Set access controls via the “Users” section by editing the User’s folder access.",
        "Alternatively, use the “Folders” section to edit access for specific users.",
      ],
      image: "/folderAccess.png",
    },
    DataatRestProtection: {
      heading: "Data at Rest Protection (Encrypted Storage)",
      paragraph: [
        "SecureTransfers provides encrypted storage for Retention and Permanent type Folders, ensuring that all files stored are encrypted using IAPP-certified cryptography. This feature is essential for handling sensitive data such as GxP, HIPAA, and PII.",
        "Steps to enable encryption for a folder.",
      ],
      bulletPoints: [
        "Navigate to the desired folder using filtering controls.",
        "Look for the “Edit Folder Access” control (represented by an icon)",
        "Enable the encrypted storage flag. Save the configuration.",
        "Activating data-at-rest protection in Secure Transfers does not guarantee that source or target systems (including external users) will properly handle file protection on their end. This protection ensures that files are encrypted when stored on the SecureTransfers MFT storage system. When handling highly sensitive data, it is recommended to use end-to-end encryption. This ensures that the data is protected and encrypted throughout its entire lifecycle, from source to target, providing a higher level of security during transfer.",
      ],
      image: "/DataAtRest.png",
    },
    FolderVerification: {
      heading: "Folder Verification",
      paragraph: [
        "The SecureTransfers platform provides a way to test a partner’s folder access permissions and validate the configuration of folders. This includes verifying backend storage system access credentials, such as those for AWS, Azure, or HDFS.",
        "Steps to Validate Partner Folder Access:",
      ],
      bulletPoints: [
        "Select User: Navigate to the Users section and use the filtering controls to select the desired user.",
        "Access User Folder View: Click on the User's name link to enter the Access for User Folder view.",
        "Run Verification: At the bottom of the Access for User Folder view, click the Verify Folder button.",
        "Wait for Completion: Allow some time for the test to complete. The duration depends on the number of folders associated with the partner.",
        "Check Results:On success, the system will display a message indicating that all folders for the partner have been verified successfully.On failure, the system will list the Folders for which verification tests have failed, including possible reasons such as incorrect access credentials.",
      ],
      image: "./DataAtRest.png",
    },
    TroubleshootingFailures: {
      heading: "Troubleshooting Failures",
      paragraph: [
        "This process ensures that partners have the correct access to the necessary folders and that the configuration is correctly set up for seamless operations.",
      ],
      bulletPoints: [
        "Failures may result from various issues, including incorrect S3 or Azure storage names, incorrect access credentials (usernames, passwords, access keys, etc.). Where possible, the system will provide the root cause of the access failure, though this cannot be guaranteed.",
        "To resolve issues, go to the folder details and verify the settings, then rerun the tests.",
      ],
    },
    TransferringFileswithSecureTransfers: {
      heading: "Transferring Files with SecureTransfers",
      paragraph: [
        "SecureTransfers offers multiple secure methods for connecting and transferring files, including HTTPS, SFTP, and FTPS. These protocols ensure safe file exchanges, sharing, and transfers.",
      ],
      bulletPoints: [
        "These methods ensure secure and efficient file transfers using the SecureTransfers platform, providing flexibility and reliability for your file management needs.",
      ],
    },
    SFTPFileTransfers: {
      heading: "Detailed Instructions to use an SFTP Client for File Transfers",
      paragraph: [
        "To transfer files using an SFTP client, follow these steps:",
        "The selection, provisioning, lifecycle management, configuration, and updates of SFTP client software are beyond the core support scope of the SecureTransfers team.",
      ],
      bulletPoints: [
        "Install or Download an SFTP Client:Choose an SFTP client that adheres to IAPP standards. Recommended options include FileZilla, WinSCP, and native Linux SFTP clients.",
        "Set Up the SFTP Client:Launch your chosen SFTP client. For this example, we will use FileZilla.",
        "Select SFTP (SSH File Transfer Protocol) as the transfer protocol.",
        "Configure the connection with the following details:Host or Server Name: (Select the appropriate SecureTransfers server), Port: 22 (default), Protocol: SFTP - SSH",
        "Authenticate:Log in using the provided username and password.When prompted, accept the server host key to establish a trusted connection.",
        "File Transfer:Navigate to the directories to find the files you need to transfer.Use the client interface to upload or download files as necessary.",
      ],
      image: "/sftpFileTransfer.png",
    },
    FTPSFileTransfers: {
      heading: "Detailed Instructions to use an FTPS Client for File Transfers",
      paragraph: [
        "The selection, provisioning, lifecycle management, configuration, and updates of FTPS client software are beyond the core support scope of the SecureTransfers team.",
        "To transfer files using an FTPS client, follow these steps:",
      ],
      bulletPoints: [
        "Install or Download an FTPS Client:Choose an FTPS client that meets IAPP compliance standards. Recommended tools include FileZilla and native Unix/Linux FTPS commands.",
        "Set Up the FTPS Client:Launch your chosen SFTP client. For this example, we will use FileZilla.",
        "Select FTPS (FTP over explicit TLS/SSL) as the transfer protocol.",
        "Configure the connection with the following details: Host or Server Name: (Select the appropriate SecureTransfers server),Port: 21 (default), Protocol: FTPS - FTP over explicit TLS/SSL",
        "Authenticate:	Log in using the provided username and password., Accept the servers certificate to establish a trusted connection.",
        "File Transfer: Navigate to the directories to find the files you need to transfer. Use the clients interface to upload or download files as necessary.",
      ],
      image: "/FTPSfileTransfer.png",
    },
    WebBrowserFileTransfers: {
      heading: "Detailed Instructions for Browser-Based File Transfers",
      paragraph: [""],
      bulletPoints: [
        "Open Your Web Browser: Use a recommended browser such as Chrome, Firefox, or Safari.",
        "Access the SecureTransfers Portal: Go to the SecureTransfers File Browser access point located on the left-hand side of the admin console UI.",
        "Log In: Enter your SecureTransfers credentials (username and password)",
        "Navigate to the Folder View",
        "After logging in, you will be directed to the Folder View screen, listing all Folders where you have access rights.",
        "The available buttons and controls depend on your user privileges and folder access.",
        "To File Transfer Select a specific folder by clicking on its name.",
        "The folders contents will be displayed (it may be empty initially).",
        "Use the provided interface controls to upload or download files.",
      ],
      image: "/WebFileTransfer.png",
    },
    INTERFACEMANAGEMENT: {
      heading: "Interface Management",
      paragraphs: [
        "SecureTransfers uses interfaces to streamline the management of file transfers between your organization and its partners. These interfaces are configured to automate the handling and processing of files, ensuring secure and compliant data exchanges.",
      ],
    },
    KeyFunctions: {
      heading: "Key Functions of Interfaces in SecureTransfers",
      bulletPoints: [
        "Automated File Transfers: Interfaces are crafted to automate the flow of files to and from SecureTransfers, adhering strictly to predefined rules that dictate how files are handled, routed, and secured.",
        "Partner Integration: Each interface is associated with specific external partners or systems. This setup supports both inbound and outbound data flows, making the system versatile in handling various data transfer requirements. The platform processes files as defined by the interface configurations and linked to the respective partners sections: Interfaces sent to this partner, Interfaces sent from this partner, Interfaces pulled from this partner.",
      ],
    },
    SecurityandCompliance: {
      heading: "Security and Compliance",
      paragraphs: [
        "Interfaces incorporate robust security measures, including encryption and secure storage, to protect data during transit and at rest. This ensures that all transfers meet internal security policies and regulatory compliance needs.",
        "Operational Details",
      ],
      bulletPoints: [
        "Consistency in File Handling: SecureTransfers guarantees that the content and structure of files remain unaltered during the transfer process. The system handles files based on the configurations set within each interface, focusing solely on security and routing without modifying the file data.",
        "Filename Pattern Matching: The platform recognizes, and processes files based on filename patterns specified within the interface configurations. This feature allows the system to handle files dynamically, catering to various operational needs without manual intervention.",
        "Error Management: Files that do not conform to any existing interface configurations are flagged as 'unrecognized'. This mechanism ensures that all files are appropriately accounted for and processed only when they meet the system's stringent criteria.",
      ],
      paragraphs1: [
        "To ensure optimal performance and compliance in SecureTransfers, it is essential to regularly update and review interface configurations to adapt to changing business needs and partner requirements. Implementing robust monitoring tools to oversee interface performance and setting up alerts for any operational anomalies is crucial for maintaining system integrity. Additionally, maintaining comprehensive documentation of all interface settings and ensuring adherence to regulatory standards are vital practices.",
        "These steps not only help in achieving audit readiness but also in upholding the highest levels of data security and operational efficiency within the platform.",
      ],
    },
    ConfiguringInterface: {
      heading: "Configuring a Class Push Interface",
      paragraphs: [
        "A Class Push Interface on the SecureTransfers platform streamlines the process of automatically sending files to an associated partners system, effectively handling both source and destination parameters.",
        "Steps to Set up a Class Push Interface",
      ],
      bulletPoints: [
        "Interface Setup",
        "Adjusting File Management and Retention",
        "Compression Settings",
        "Cryptographic Configurations",
        "Signature Management",
        "Sequencing Files",
        "Transfer Scheduling",
      ],
      paragraphs1: [
        "Important Consideration: While character conversion is supported, it is intended as a best-effort service with the expectation that the receiving system is equipped to process any designated file format correctly.",
      ],
    },
    InterfaceSetup: {
      heading: "Interface Setup",

      bulletPoints: [
        "Navigate to the 'Interfaces' section under Secure Automation and start the configuration by selecting the '+create push' button.",
        "Choose the 'core' tab and proceed with the following actions",
        "Input a unique identifier for the interface in the 'Interface Name' box.",
        "Toggle the 'Interface Status' to Enabled or Disabled based on your operational needs.",
        "In the 'Filename Pattern' box, define the patterns for the filenames that will be processed.",
        "Select whether to activate 'Encrypted Storage', which secures files using SecureTransfers' encryption keys.",
        "Enable email notifications for successful file delivery under 'Alert on Success'. f. Conclude this section by clicking 'Save'.",
      ],
      image: "/interfaceSetup.png",
    },
    FileManagementRetention: {
      heading: "Adjusting File Management and Retention",
      paragraphs: ["Transition to the 'Push' tab and specify:"],
      bulletPoints: [
        "The number of days for retaining processed files in the 'Retention' box.",
        "The file validation method, choosing from PLAIN, ZIP, or BPCS.",
        "The character encoding format for files: binary, ASCII, or EBCDIC.",
        "Commit these settings by clicking 'Save'.",
      ],
      image: "/filemanagement.png",
    },
    CompressionSettings: {
      heading: "Compression Settings",
      paragraphs: ["In the 'Compression' tab:"],
      bulletPoints: [
        "Choose to turn compression on or off.",
        "Set parameters for decompressing files from Zip archives.",
        "Apply these choices by clicking 'Save'.",
      ],
      image: "/compressionset.png",
    },
    CryptographicConfigurations: {
      heading: "Cryptographic Configurations",
      paragraphs: ["Utilize the 'Cryptography' tab to:"],
      bulletPoints: [
        "Establish your preferred encryption and decryption methods.",
        "Specify the use of a key or password for these processes.",
        "If necessary, enter the required password.",
        "Save your cryptographic settings.",
      ],
      image: "/cryptoconfig.png",
    },
    SignatureManagement: {
      heading: "Signature Management",
      paragraphs: ["Visit the 'Signatures' tab:"],
      bulletPoints: [
        "Configure options for PGP signing and verification according to your security protocols.",
        "Save these preferences.",
      ],
      image: "/sigMgmnt.png",
    },
    SequencingFiles: {
      heading: "Sequencing Files",
      bulletPoints: [
        "In the Sequence Number Offset box, enter the starting character of the sequence number in the filename.",
        "In the Sequence Number Length box, enter the length of the sequence number in the filename.",
        "In the Positive Tolerance box, enter a number. The interface will send an error and halt if more than this number of files are missing. A warning will be sent if the number of missing files is less than or equal to this number.",
        "In the Negative Tolerance box, enter a number. If set to 0, an error will be sent, and the interface will stop if the sequence number is smaller or equal to the previous one. A warning will be sent if it is within the tolerance.",
        "Click Save.",
      ],
      image: "./seqfiles.png",
    },
    TransferScheduling: {
      heading: "Transfer Scheduling",
      paragraphs: ["In the 'Scheduling' tab:"],
      bulletPoints: [
        "Outline the times when transfers will occur, specifying start and end times.",
        "Select the applicable weekdays and exact dates of the month for these transfers.",
        "Save these scheduling details",
      ],
      image: "./transferscheduling.png",
    },
    classPullInterface: {
      heading: "Configuring a Class Pull Interface",
      paragraphs: [
        "SecureTransfers offers a robust pull interface for system-to-system file transfers. This interface facilitates the retrieval of files from diverse storage solutions such as SFTP server folders, AWS S3 buckets, SharePoint folders, and Azure Blob stores, among others.",
        "Sequential File Retrieval",
        "By default, the pull interface in SecureTransfers operates under a Serial-FIFO (First In, First Out) configuration. This means that file transfers from designated storage locations are handled sequentially, one at a time, ensuring organized and traceable file handling. For instance, the system might start by pulling files from FolderX, proceed to FolderY, and continue in this manner through FolderZ. Within a specific folder, files are pulled sequentially, one at a time.",
        "Execution Time and Order",
        "The duration required to complete a pull operation can vary significantly, depending on factors such as the remote system's performance, network speed, and the volume and size of the files being transferred. For partners with a large number of pull interfaces, each containing hundreds of large files, a particular pull operation could take several minutes to several hours to complete. The total time required to pull all files is determined by the remote system capacity, the network speed, the number of files, and their size, and is outside the control of the SecureTransfers platform.",
        "The order in which files in a particular folder are pulled is determined by the output of the directory listing (e.g., the ls command) returned by the remote server. This order is typically alphabetical but not guaranteed, and SecureTransfers cannot guarantee or influence the order in which individual files are pulled.",
        "Enhanced Throughput with Parallel Processing",
        "For environments that require higher efficiency due to large volumes of data or files, SecureTransfers can be configured to operate in a parallel, multithreaded mode. In this configuration, both pull and push jobs run in parallel using multiple threads and multiple concurrent communication channels (sessions).",
        "In parallel mode, pull interfaces linked to a specific SecureTransfers partner will execute parallel threads starting at the same time (limited by the maximum number of concurrent push and pull sessions). Each thread pulls files sequentially within its designated folder, but multiple folders are processed simultaneously across different threads. This significantly enhances the throughput of file retrieval operations, increasing the number of files that can be pulled within a specific time slot. The pull cycle stops when all threads finish, i.e., when the last file is pulled in.",
        "Parallel mode allows for the retrieval of more files from different locations within a shorter time window. The overall performance gain from this mode depends on the remote server's response times, the number of concurrent sessions supported, network capacity, and the number and size of the files being pulled.",
        "The overall performance gain from this mode depends on the remote server's response times, the number of concurrent sessions established, network capacity, and the specifics of the files being pulled.",
      ],
    },
    setupClassPullInterface: {
      heading: "Steps to setup Class Pull Interface",
      bulletPoints: [
        "Class Pull Interface Setup",
        "Managing File Handling Options",
        "Scheduling File Transfers",
        "Ad-Hoc Scheduling",
      ],
    },
    CPInterfaceSetup: {
      heading: "Class Pull Interface Setup",
      bulletPoints: [
        "Navigate to the 'Interfaces' tab and click on the “+create pull” button to create a new pull interface.",
        "Under the “core” tab, perform the following setup:",
        "Interface Name: Enter a distinctive name for the interface.",
        "Interface Status: Toggle to 'Enabled' to activate or 'Disabled' to deactivate as required.",
        "Filename Pattern: Define the criteria for filenames that this interface will process.",
        "Encrypted Storage: Choose 'Off' for standard storage or enable encryption using SecureTransfers' internal keys.",
        "Alert on Success: Set to 'Off' for no alerts or enable to receive email notifications upon successful file transfer.",
        "Maximum Activity Interval: Enter the time in seconds to alert if no file is received within this interval. Leave blank to disable.",
        "Confirm these settings by clicking 'Save'.",
      ],
      image: "./CPInterfaceSetup.png",
    },
    ManagingFile: {
      heading: "Managing File Handling Options",
      bulletPoints: [
        "Switch to the 'Pull' tab and set file management preferences:",
        "Rename on Source: Append a timestamp and 'SecureTransfers' to file names on the source after pulling to prevent reprocessing.",
        "Delete on Source: Select this option to delete files from the source post-successful transfer.",
        "UnZip Incoming: Choose to either keep this feature off or unzip incoming Zip files and process all contained files.",
      ],
      image: "./CPmanagingFile.png",
    },
    SchedulingFileTransfers: {
      heading: "Scheduling File Transfers",
      paragraphs: ["Move to the 'Scheduling' tab:"],
      bulletPoints: [
        "Active Timespan: Enable to restrict file transfers to specific times.",
        "From - To: Set the begin and end times for the active period.",
        "Weekdays/Days of the Month: Select which days transfers are allowed and specify exact dates using commas (e.g., “3, 10, 17, 24, 31”).",
        "Click 'Save' to confirm the scheduling settings.",
      ],
      image: "./CPschedulefiletrans.png",
    },
    AdHocScheduling: {
      heading: "Ad-Hoc Scheduling",
      paragraphs: ["In the 'Ad-Hoc Scheduling' tab:"],
      bulletPoints: [
        "Date & Time: Input specific times for when the interface should actively pull files.",
        "Use the 'Add' button to include these times in the schedule.",
      ],
      image: "./CPadhocscheduling.png",
      paragraphs1: [
        "Key Considerations",
        "Files ready for pulling must be 'final and completed'—not open or being written to. Ideally, source applications should not write to the directory from which files are being pulled. If necessary, use a temporary filename tag (e.g., <filename>.<extension>.tmp) and rename files only after writing is complete.",
        "Configure the interface to recognize file names formatted as <filename>.<extension> to avoid processing incomplete files.",
      ],
    },
    AdvancedInterfaceConfiguration: {
      heading: "Advanced Interface Configuration for SecureTransfers",
      paragraphs: [
        "The Advanced Interface Configuration in SecureTransfers offers a suite of settings designed to enhance control over file transfer processes. These configurations ensure that file transfers are executed in an orderly, timely, and secure manner, tailored to meet specific operational requirements. This guide covers Sequence Validation, Inactivity Detection, Time-Based File Processing Restrictions, and Ad-Hoc Scheduling, each explained with detailed settings and examples.",
      ],
    },
    SequenceValidation: {
      heading: "Sequence Validation",
      paragraphs: [
        "Purpose and Importance: Sequence validation is vital for maintaining the integrity of processes that depend on the order of file arrivals. This is especially crucial in scenarios such as financial transactions, batch processing, and chronological data logging, where processing files out of sequence could lead to errors or data corruption.",
        "Detailed Configuration with Examples",
      ],
      bulletPoints: [
        "Sequence Number Offset: Indicates the position within the filename where the sequence number starts. Ex:10 (sequence number starts at the 10th character)",
        "Sequence Number Length: Specifies the number of characters that constitute the sequence number. Ex:4 (sequence number is 4 characters long)",
        "Positive Tolerance: Allows a set number of sequence numbers to be skipped without triggering an error, accommodating minor disruptions. Ex:5 (up to 5 missing sequence numbers allowed)",
        "Negative Tolerance: Ensures files are not processed if they arrive in reverse order. A zero setting means any deviation from the sequence triggers an error.Ex:0 (any reverse sequence triggers an error)",
      ],
      paragraphs1: [
        "Operational Example: A financial institution receives transaction files named trans_20220501_0001.txt, trans_20220501_0002.txt, etc. Sequence validation ensures these files are processed in the correct order, maintaining accurate financial records.",
      ],
    },
    InactivityDetection: {
      heading:
        "Inactivity Detection (Only Configurable on Interface of Class Pull)",
      paragraphs: [
        "Purpose and Importance: Inactivity detection monitors the continuous flow of files. If files are not received within a specified interval, the system alerts administrators to potential issues such as network disruptions or data source problems. This feature is crucial for systems requiring regular data updates.",
        "Detailed Configuration with Example",
      ],
      bulletPoints: [
        "Maximum Activity Interval: Defines the maximum time allowed between file arrivals. Exceeding this interval triggers an alert, prompting investigation and resolution of issues. Ex: 1800 seconds (30 minutes).",
      ],
      paragraphs1: [
        "Operational Example: An environmental monitoring system expects data files every 15 minutes. If no file is received within 30 minutes, the system triggers an alert, indicating potential sensor or connectivity issues needing immediate attention.",
      ],
    },
    TimeBasedFileProcessing: {
      heading: "Time-Based File Processing Restrictions",
      paragraphs: [
        "Purpose and Importance: This feature restricts file processing to specified times and days, optimizing system performance and ensuring compliance with operational schedules. It is particularly useful for balancing system loads and avoiding conflicts with maintenance windows or peak business hours.",
        "Detailed Configuration with Example",
      ],
      bulletPoints: [
        "Active Timespan: Enables file processing only during designated times.Ex: Enabled",
        "Timespan Settings: Specifies the start and end times for the active processing period.Ex: 22:00 to 02:00 (process files only between 10 PM and 2 AM)",
        "Day Restrictions: Allows file processing only on specific days, aligning with business operations and availability.Ex:Monday to Friday (process files only on weekdays)",
      ],
      paragraphs1: [
        "Operational Example: A retail company schedules file processing from 10 PM to 2 AM, Monday to Friday, to avoid disrupting daytime operations and to align with system maintenance schedules conducted during weekends.",
      ],
    },
    AdvancedAdHocScheduling: {
      heading: "Ad-Hoc Scheduling",
      paragraphs: [
        "Purpose and Importance: Ad-hoc scheduling is designed for one-time or irregular file transfers, providing flexibility for handling exceptional or unplanned data processing needs without altering regular schedules.",
        "Detailed Configuration with Example",
      ],
      bulletPoints: [
        "Specific Date and Time: Allows administrators to set exact dates and times for ad-hoc transfers, catering to special events or requirements.",
        "Example for Date and Time Settings: December 31st, 23:00 (schedule a transfer to occur at 11 PM on December 31st)",
      ],
      paragraphs1: [
        "Operational Example: During end-of-year reporting, an accounting firm schedules a special data transfer at 11 PM on December 31st to ensure timely processing of financial data, crucial for generating year-end reports.",
      ],
    },
    InterfaceCrypto: {
      heading: "Interface Cryptography Features",
      paragraphs: [
        "Introduction: SecureTransfers provides robust cryptographic features to ensure the security and integrity of files during transfer and storage. These features are essential for handling highly confidential data, adhering to industry standards, and facilitating secure communication between internal and external partners.",
        "I) Supported Cryptographic Standards: SecureTransfers supports several industry-standard cryptographic methods, including:",
        "1. PGP (Pretty Good Privacy): Utilizing Bouncy Castle Crypto APIs, SecureTransfers supports PGP encryption conforming to RFC 2440 (OpenPGP/GnuPG). It offers:",
        "●	256-bit AES (Advanced Encryption Standard).",
        "●	PGP CAST-128/CAST5.",
        "●	Triple DES (3DES).",
        "2. WinZip AES (256) Encryption: Providing an additional layer of security for file encryption using AES 256-bit encryption.",
        "II) Supported PGP Keys:",
        "●	RSA/DSA keys ranging from 1024 to 4096 bits, with or without additional passphrases.",
        "●	DSA-style PGP keys with expiration options ranging from 1 to 50 years.",
        "III) Tool Compatibility: GNU Privacy Guard (GPG) or OpenPGP tools can be used to verify and decrypt files, as well as to verify PGP keys generated or received during testing phases. Recommended tools include:",
        "●	Gpg4win (Windows)",
        "●	GnuPG (Unix/Windows)",
        "IV) Core Features: SecureTransfers supports a range of cryptographic operations to ensure data integrity and security:",
        "1.	Encryption of Outbound Files:",
        "●	PGP Encryption: Creates a second, encrypted version of the file with a .pgp extension. For example, example.txt becomes example.txt.pgp. The encrypted file is then transmitted.",
        "●	ZIP AES Encryption: Creates a second, encrypted version of the file with a .zip extension. For example, example.txt becomes example.txt.zip. The encrypted file is then transmitted.",
        "2.	Decryption of Incoming Files:",
        "●	PGP Decryption: Converts the encrypted data back into its original form, creating decrypted files without the .pgp extension. For example, example.txt.pgp becomes example.txt.",
        "●	ZIP AES Decryption: Converts the encrypted data back into its original form, creating decrypted files without the .zip extension. For example, example.txt.zip becomes example.txt.",
        "3.	File Signing:",
        "●	Sign outbound files using PGP keys to ensure the authenticity and integrity of the files.",
        "4.	Signature Verification:",
        "●	Verify PGP signatures on inbound files to confirm their authenticity and integrity.",
        "5.	Mixed Operations:",
        "●	Combine encryption and signing for outbound files.",
        "●	Combine decryption and signature verification for inbound files.",
        "Note: When 'Encrypt or decrypt using a password' is selected, a password is mandatory for both encryption and decryption. This option is not used when any PGP key option is selected.",
        "V) Creating PGP Keys:",
        "●	When creating a PGP key through SecureTransfers’ built-in functionality, a random passphrase is generated by default, consisting only of characters from the BASE64 alphabet.",
        "●	The target partner’s public key is used for encryption, and the source partner’s private key is used for decryption.",
        
      
      ],
    },
  };

  // const selectedContent = content[selectedItem];

  const highlightSearchTerm = (text, term) => {
    if (!term) return text;
    const parts = text.split(new RegExp(`(${term})`, "gi"));
    return (
      <>
        {parts.map((part, index) => (
          <span
            key={index}
            className={
              part.toLowerCase() === term.toLowerCase() ? "highlight" : ""
            }
          >
            {part}
          </span>
        ))}
      </>
    );
  };

  // const renderContent = (selectedItem) => {
  //   const itemContent = content[selectedItem];
  //   if (!itemContent) return null;
  //   const filteredParagraphs = itemContent.paragraphs.filter((paragraph) =>
  //     paragraph.toLowerCase().includes(searchTerm.toLowerCase())
  //   );

  const renderContent = (selectedItem) => {
    const itemContent = content[selectedItem];
    if (!itemContent) return null;

    return (
      <div>
        {/* <h1>{itemContent.heading}</h1>
        {filteredParagraphs.map((paragraph, index) => (
          <p key={index}>{highlightSearchTerm(paragraph, searchTerm)}</p>
        ))} */}

        {itemContent.heading && <h1>{itemContent.heading}</h1>}
        {itemContent.paragraphs &&
          itemContent.paragraphs.length > 0 &&
          itemContent.paragraphs.map((paragraph, index) => (
            <p key={index}>{highlightSearchTerm(paragraph, searchTerm)}</p>
          ))}

        {itemContent.bulletPoints && (
          <ul>
            {itemContent.bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
        {/* {itemContent.image && (
          <img src={itemContent.image} alt={itemContent.heading} />
        )} */}

        {itemContent.image && (
          <img
            src={itemContent.image}
            alt={itemContent.heading}
            className="content-image"
          />
        )}
        {itemContent.paragraphs1 &&
          itemContent.paragraphs1.length > 0 &&
          itemContent.paragraphs1.map((paragraph, index) => (
            <p key={index}>{highlightSearchTerm(paragraph, searchTerm)}</p>
          ))}
        <Footer />
      </div>
    );
  };
  return <div className="main-content">{renderContent(selectedItem)}</div>;
}

export default MainContent;
