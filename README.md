Telerik.Sitefinity.Web.Services.Samples.KendoWidget
===================================================

>**Latest supported version**: Sitefinity CMS 11.0.6700.0

>**Documentation articles**: [For developers: Client-side programming and Web services](http://docs.sitefinity.com/for-developers-client-side-programming-and-web-services)

### Overview

The sample illustrates how to use the built-in kendo transport of the client sdk. The transport is passed to the kendo datasource, which internally will use the web-services sdk to query the Sitefinity CMS services.

### Prerequisites

- You must have a Sitefinity CMS license.
- Your setup must comply with the system requirements.  
 For more information, see the [System requirements](https://docs.sitefinity.com/system-requirements) for the  respective Sitefinity CMS version.
- A user with the credentials (or change these in the DataImporter.cs file) -> 
	email: admin@test.com
	pass: password

- Follow the steps from 1 to 10 to setup authentication in Sitefinity as described here -> https://docs.sitefinity.com/request-access-token-for-calling-web-services


### Installation

1. Clear the NuGet cache files.  
 a. Open the `BugTracker` solution file in Visual Studio.  
 b. In the toolbar, navigate to _Tools >> NuGet Package Manager >> Package Manager Settings_.  
 c. In the left pane, navigate to _NuGet Package Manager >> General_.  
 d. Click _Clear All NuGet Cache(s)_.
2. Restore the NuGet packages in the solution.  
   
   >**NOTE**: The solution in this repository relies on NuGet packages with automatic package restore while the build procedure takes place.   
   >For a full list of the referenced packages and their versions see the [packages.config](https://github.com/Sitefinity-SDK/Telerik.Sitefinity.Samples.BugTracker/blob/master/SitefinityWebApp/packages.config) file.    
   >For a history and additional information related to package versions on different releases of this repository, see the [Releases page](https://github.com/Sitefinity-SDK/Telerik.Sitefinity.Samples.BugTracker/releases).
   >  
   a. Navigate to _Tools >> NuGet Package Manager >> Package Manager Console_.  
   b. In _Source_, select Sitefinity CMS NuGet Repository.  
   c. Click _Restore_ button.

### Login

1. In the context menu of SitefinityWebApp, click _View >> View in Browser_.  
 After the project initializes, the _License activation_ page appears.
2. Activate your license.  
 For more information, see [Activate a license](http://docs.sitefinity.com/activate-a-license).
3. To login into the Sitefinity CMS backend, use the following credentials:  
 **Username:** admin  
 **Password:** password
