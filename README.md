# webservices-kendo-widget

The sample illustrates how to use the built-in kendo transport of the client sdk. The transport is passed to the kendo datasource, which internally will use the web-services sdk to query the Sitefinity CMS services.

### Requirements

* Sitefinity CMS license
* .NET Framework 4
* Visual Studio 2012
* Microsoft SQL Server 2008R2 or later versions

### Prerequisites

Clear the NuGet cache files. To do this:

1. In Windows Explorer, open the **%localappdata%\NuGet\Cache** folder.
2. Select all files and delete them.

### Nuget package restoration
The solution in this repository relies on NuGet packages with automatic package restore while the build procedure takes place.   
For a full list of the referenced packages and their versions see the [packages.config](https://github.com/Sitefinity-SDK/webservices-kendo-widget/blob/master/packages.config) file.
