using Email_Test_API.Models.Dtos;

namespace Email_Test_API.Service.Interfaces
{
    public interface IEmailService
    {
        void SendEmail(EmailDto request);
    }
}