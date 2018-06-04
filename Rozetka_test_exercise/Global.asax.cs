using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;
using WebApiContrib.Formatting.Jsonp;

namespace Rozetka_test_exercise
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configuration.AddJsonpFormatter();//jsonp

            GlobalConfiguration.Configure(WebApiConfig.Register);
        }
    }
}
