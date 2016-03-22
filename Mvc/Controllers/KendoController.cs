using SitefinityWebApp.Mvc.Models.Kendo;
using System.Web.Mvc;
using Telerik.Sitefinity.Mvc;

namespace SitefinityWebApp.Mvc.Controllers
{
    [ControllerToolboxItem(Name = "Kendo2", Title = "Kendo2", SectionName = "Samples")]
    public class KendoController : Controller
    {
        public ActionResult Index()
        {
            return View(new GridSampleModel());
        }
    }
}