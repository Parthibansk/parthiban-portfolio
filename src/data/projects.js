export const projects = [
  {
    name: 'TIMS',
    type: 'Gas Industry',
    problem:
      'The gas industry needed a unified platform to manage supply, import, export, and ISO tank operations with strong operational visibility.',
    solution:
      'Developed TIMS to manage sales and purchase order processing, inventory, dashboards, multi-currency support, and reporting modules for operational control.',
    role: 'Senior Software Developer',
    responsibilities: ['Backend and workflow development', 'Reporting and dashboard implementation', 'Inventory and order-processing logic'],
    architecture:
      'ASP.NET application built around operational modules for order processing, inventory visibility, and reporting.',
    features: ['Sales and purchase order processing', 'Inventory management', 'Dashboards', 'Multi-currency support', 'Reporting modules'],
    impact: 'Improved operational visibility and decision-making through real-time dashboards.',
    challenges: 'Unified operational data and reporting across tank logistics, sales, and procurement flows.',
    stack: ['ASP.NET', 'C#', 'MySQL'],
  },
  {
    name: 'Medplus',
    type: 'Healthcare',
    problem:
      'Medical laboratory workflows were fragmented and required better automation and integrated electronic health records (EHR) operations.',
    solution:
      'Built an automated laboratory management system with patient records, testing workflows, and reporting support.',
    role: 'Senior Software Developer',
    responsibilities: ['Application design and development', 'Workflow automation', 'Reporting module support'],
    architecture:
      'ASP.NET MVC5 application with Razor views and SQL Server-backed records and reporting modules.',
    features: ['Patient records', 'Test workflows', 'Reporting modules', 'EHR integration'],
    impact: 'Standardized laboratory operations and improved process continuity across patient and test workflows.',
    challenges: 'Connected lab operations with EHR-driven patient workflows in a secure enterprise environment.',
    stack: ['ASP.NET MVC5', 'Razor', 'C#', 'SQL Server', 'React JS'],
  },
  {
    name: 'Cronica',
    type: 'Healthcare SaaS',
    problem:
      'Hospitals and private practices needed a healthcare platform that could support chronic care management and external integrations at scale.',
    solution:
      'Developed a SaaS-based chronic care management platform with marketplace features and EHR integrations.',
    role: 'Senior Software Developer',
    responsibilities: ['Platform development', 'Healthcare workflow design', 'External system integration'],
    architecture:
      'SaaS-oriented ASP.NET MVC5 application with Razor views and a shared healthcare data model.',
    features: ['Marketplace features', 'EHR provider integrations', 'Chronic care workflows'],
    impact: 'Enabled healthcare providers to coordinate care through a scalable SaaS model.',
    challenges: 'Integrated a healthcare platform with major EHR providers while maintaining a stable marketplace experience.',
    stack: ['ASP.NET MVC5', 'Razor', 'C#', 'SQL Server'],
  },
  {
    name: 'Primex',
    type: 'Clinical Lab Information System',
    problem:
      'Clinical laboratory workflows required dependable coordination across hospital, patient, doctor, and lab-test operations.',
    solution:
      'Designed and implemented modules for hospital records, patient management, doctor workflows, lab test orders, ICD-based reports, and analytics.',
    role: 'Senior Software Developer',
    responsibilities: ['Module design', 'System development', 'Analytics and reporting support'],
    architecture:
      'Enterprise .NET solution centered on clinical data flows and domain-specific reporting.',
    features: ['Hospital and patient modules', 'Doctor workflows', 'Lab test ordering', 'ICD-based reports', 'Analytics'],
    impact: 'Simplified clinical data handling across hospital and laboratory operations.',
    challenges: 'Structured domain-specific lab reporting and patient-centric workflows into a maintainable application structure.',
    stack: ['.NET', 'SQL Server'],
  },
  {
    name: 'RakkimHeath',
    type: 'Remote Medical Testing',
    problem:
      'Remote healthcare delivery needed a secure platform to process home-based medical testing and device-generated data.',
    solution:
      'Developed a platform for blood test, ECG, and sugar testing that integrated IoT medical devices and processed device data through the application layer.',
    role: 'Senior .NET Developer',
    responsibilities: ['Platform architecture and development', 'IoT integration support', 'Cloud deployment and CI/CD delivery'],
    architecture:
      'Modern .NET Core and MVC-based solution with Razor views, relational persistence, and cloud deployment automation.',
    features: ['Home-based testing workflows', 'IoT medical device integration', 'Medical data processing', 'Cloud-ready delivery'],
    impact: 'Enabled remote clinical testing delivery with integrated device-driven data capture.',
    challenges: 'Connected medical devices and processing workflows into a cloud-ready healthcare solution.',
    stack: ['.NET Core', 'MVC', 'Razor', 'SQL Server', 'GitHub Copilot AI', 'Azure', 'DevOps', 'CI/CD Pipelines'],
  },
  {
    name: 'Lloyds Banking Group — BECK Application',
    type: 'Finance / Regulatory Reporting',
    problem:
      'Treasury and regulatory reporting required reliable data integration and regulatory compliance support for liquidity reporting to UK regulators.',
    solution:
      'Built a data integration solution for liquidity reporting, including upstream data loading pipelines for treasury operations and compliance support.',
    role: 'Senior Software Engineer',
    responsibilities: ['Data integration development', 'Data loading pipeline implementation', 'Support for compliance and stress-testing workflows'],
    architecture:
      'Windows application solution built to support treasury data ingestion and regulatory reporting needs.',
    features: ['Upstream data loading pipelines', 'Liquidity reporting support', 'Regulatory compliance alignment', 'Stress-testing support'],
    impact: 'Supported treasury reporting readiness and compliance-related data operations for a major banking environment.',
    challenges: 'Align data integration with strict regulatory reporting requirements and operational controls.',
    stack: ['C#', 'SQL Server', 'Windows Application'],
  },
  {
    name: 'EZeeConfig',
    type: 'Master Data Management',
    problem:
      'The client needed a modernization program to improve master data quality, governance, and in-memory processing capabilities.',
    solution:
      'Delivered a master data migration and modernization platform that profiled, cleansed, rationalized, and enriched master data into a “Golden Master” dataset for downstream applications.',
    role: 'Senior .NET Developer',
    responsibilities: ['Master data migration development', 'Rule engine implementation', 'Golden Master dataset creation', 'Cloud and DevOps delivery'],
    architecture:
      'Modernized data architecture using MSSQL, SQLite, .NET MVC, Razor, Windows .NET Core, React JS, and Telerik Kendo Controls.',
    features: ['Rule engine for MDM data cleaning', 'Golden Master data set creation', 'Data quality governance', 'Data modernization'],
    impact: 'Improved data quality and business productivity by creating a governed Golden Master dataset.',
    challenges: 'Harmonize disparate master data elements into a trusted, enriched canonical dataset for enterprise consumption.',
    stack: ['MSSQL', 'SQLite', ' .NET MVC', 'Razor', 'Windows .NET Core', 'React JS', 'Telerik Kendo Controls', 'Azure', 'GitHub Copilot AI', 'DevOps', 'CI/CD Pipelines'],
  },
]
