import React from "react";
import "./MainContent.css"; // Assuming you'll add some CSS for highlighting
import Footer from "./Footer";
import Picture1 from "./assets/Picture1.png";

function MainContent({ selectedItem, searchTerm }) {
  const content = {
    Home: {
      // heading: "Home Page",
      // paragraphs: ["Welcome to the Secure Transfers."],
      image: Picture1,
    },
    INTRODUCTION: {
      heading: "Introduction to Secure Transfers",
      paragraphs: [
        "Secure Transfers is an advanced Managed File Transfer (MFT) tool designed to provide secure, reliable, and automated file transfer capabilities. Tailored for modern enterprise needs, Secure Transfers facilitates seamless data exchange between internal and external partners, staff members, machines, and servers, supporting various transfer patterns including Business-to-Business (B2B), Machine-to-Machine (M2M), Human-to-Human (H2H), and Group-to-Group (G2G).",
        "Secure Transfers offers a comprehensive suite of features aimed at ensuring data security and integrity throughout the file transfer process. With its user-friendly interface and robust security measures, Secure Transfers helps organizations reduce operational costs, enhance the quality of data transmissions, and comply with stringent regulatory requirements.",
      ],
      // image: "https://via.placeholder.com/150",
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
    "Subheading1.2": {
      heading: "Subheading 1.2",
      paragraphs: ["This is Subheading 1.2."],
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
      paragraphs: ["To upload a custom logo for your project in Secure Transfers, follow these steps:",
        "Navigate to the Logo Tab: Projects without a custom logo will automatically be assigned a default logo.",
        "Upload the Logo: Click the Upload Logo button.Select the logo file you wish to upload and confirm your selection.Verify that the uploaded logo is displayed correctly.",
        "Save the Changes: Click the Save button to apply the changes.",
        "Logo Specifications: Logos should ideally be 300(w) x 100(h) pixels. Accepted formats are jpg, gif, or png.",
      "Note:"
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
        "Below is an example of the resulting custom help message accessible to partners."
      ],
    },
    GenerateLogReport: {
      heading: "Generate an activity log report",
      paragraphs: ["The Secure Transfers platform tracks partner activity, particularly file uploads, downloads, and deletions."],
    },
    AccessViaAdminUI:{
      heading: "Access via Secure Transfers Admin UI",
      paragraphs: ["Navigate to the Logging section and select Activity Log.",
                  "Search Activity Logs",
                  "In the Activity Log screen, enter your search criteria.",
                  "Click the Search button.",
                  "The system will return all matching records, detailing file-related activities such as who performed the action, what was done, and when it occurred. This includes reports on delete (DELE), store (STOR), and retrieve (RETR) activities performed by partners on specific projects and folders."],
    },
    ViaAuditingLogFolders:{
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

    GenerateAuditReport: {
      heading: "Generate a project configuration and access audit report",
      paragraphs: ["Generate a project configuration and access audit report."],
    },
    "PARTNERS&FOLDERS": {
      heading: "Partners & Folders",
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
    },
    CreatePartners: {
      heading: "Create a New Partner",
      paragraphs: ["Steps to create a Partner."],
      bulletPoints: [
        "Click the Add Partner button and select the appropriate option from the menu.",
        "In the Add Partner popup window, select the relevant partner type and fill in the required details, such as employee or contractor information.",
        "Click Save to complete the process. If the partner already exists, simply search for their name, and assign them to your eFolder(s).",
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
        <Footer />
      </div>
    );
  };
  return <div className="main-content">{renderContent(selectedItem)}</div>;
}

export default MainContent;
