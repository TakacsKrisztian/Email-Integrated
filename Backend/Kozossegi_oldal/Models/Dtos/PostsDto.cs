namespace Kozossegi_oldal.Models.Dtos
{
    public record PostDto(Guid Id, string Title, string Author, string Category, string Content, string Image, DateTime CreatedTime);
    public record CreatePostDto(string Title, string Author, string Category, string Content, string Image);
    public record RemovePostDto(Guid Id);
    public record UpdatePostDto(string Title, string Author, string Category, string Content, string Image);
}