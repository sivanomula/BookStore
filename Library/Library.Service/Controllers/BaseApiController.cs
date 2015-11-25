using System.Web.Http;
using System.Web.Http.Cors;

namespace Library.Service.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*", exposedHeaders: "X-Custom-Header")]
    public class BaseApiController:ApiController
    {
    }
}