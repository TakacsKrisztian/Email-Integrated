using Kozossegi_oldal.Models;
using Kozossegi_oldal.Models.Dtos;
using Kozossegi_oldal.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Kozossegi_oldal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostInterface postService;

        public PostController(IPostInterface postService)
        {
            this.postService = postService;
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] CreatePostDto createPostDto)
        {
            try
            {
                await postService.PostPost(createPostDto);
                return StatusCode(201, "A posztot sikeresen létrehozta.");
            }
            catch (Exception e)
            {
                return StatusCode(400, e.Message);
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Posts>>> GetPosts()
        {
            try
            {
                return StatusCode(200, await postService.Get());
            }
            catch (Exception e)
            {
                return StatusCode(400, e.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Posts>> GetById(Guid id)
        {
            try
            {
                return StatusCode(200, await postService.GetById(id));
            }
            catch (Exception e)
            {
                return StatusCode(400, e.Message);
            }
        }

        [HttpGet("category")]
        public async Task<ActionResult<IEnumerable<Posts>>> GetByCategory([FromQuery] string category)
        {
            try
            {
                return StatusCode(200, await postService.GetByCategory(category));
            }
            catch (Exception e)
            {
                return StatusCode(400, e.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Posts>> Put(Guid id, [FromBody] UpdatePostDto updatePostDto)
        {
            try
            {
                var result = await postService.PutPost(id, updatePostDto);
                return StatusCode(201, result);
            }
            catch (Exception e)
            {
                return StatusCode(400, e.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(Guid id)
        {
            try
            {
                await postService.DeletePost(id);
                return StatusCode(201, "A posztot sikeresen kitörölte.");
            }
            catch (Exception e)
            {
                return StatusCode(400, e.Message);
            }
        }
    }
}