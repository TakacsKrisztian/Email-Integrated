using Kozossegi_oldal.Models;
using Kozossegi_oldal.Models.Dtos;

namespace Kozossegi_oldal.Repositories
{
    public interface IPostInterface
    {
        Task<IEnumerable<Posts>> Get();
        Task<Posts> GetById(Guid id);
        Task<IEnumerable<Posts>> GetByCategory(string category);
        Task PostPost(CreatePostDto createPostDto);
        Task<Posts> PutPost(Guid id, UpdatePostDto updatePostDto);
        Task DeletePost(Guid id);
    }
}