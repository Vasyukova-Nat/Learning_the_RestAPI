# Learning_the_RestAPI
My REST API project on NodeJS

Version 1 (the first commit):
Чтобы воспользоваться сервером, нужно через командную строку запустить npm run dev.
Затем нужно отправить POST-запрос с приложения Postman: 
1) Лучше открыть именно локальный сервис Постман, потому что сайт https://www.postman.com/ не мог отправить на мой Locallhost запрос извне из-за блокировки безопасности брэндмауэра.
2) Выбрать адрес http://localhost:8080/api/user
3) Открыть раздел Body, выбрать тип данных raw и JSON
4) Ввести текст в формате JSON:
{
    "name": "ivan",
    "surname": "meow"
}



