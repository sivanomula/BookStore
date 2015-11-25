using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using Library.Service.Models;

namespace Library.Service.Controllers
{
    public class BookDetailsController : BaseApiController
    {
        private LibraryEntities db = new LibraryEntities();

        // GET: api/BookDetails
        public IQueryable<BookDetail> GetBookDetails()
        {
            return db.BookDetails;
        }      

        // GET: api/BookDetails/5
        [ResponseType(typeof(BookDetail))]
        public IHttpActionResult GetBookDetail(int id)
        {
            BookDetail bookDetail = db.BookDetails.Find(id);
            if (bookDetail == null)
            {
                return NotFound();
            }

            return Ok(bookDetail);
        }

        // PUT: api/BookDetails/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutBookDetail(int id, BookDetail bookDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != bookDetail.BookDetailsId)
            {
                return BadRequest();
            }

            db.Entry(bookDetail).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/BookDetails
        [ResponseType(typeof(BookDetail))]
        public IHttpActionResult PostBookDetail(BookDetail bookDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.BookDetails.Add(bookDetail);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = bookDetail.BookDetailsId }, bookDetail);
        }

        // DELETE: api/BookDetails/5
        [ResponseType(typeof(BookDetail))]
        public IHttpActionResult DeleteBookDetail(int id)
        {
            BookDetail bookDetail = db.BookDetails.Find(id);
            if (bookDetail == null)
            {
                return NotFound();
            }

            db.BookDetails.Remove(bookDetail);
            db.SaveChanges();

            return Ok(bookDetail);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool BookDetailExists(int id)
        {
            return db.BookDetails.Count(e => e.BookDetailsId == id) > 0;
        }
    }
}