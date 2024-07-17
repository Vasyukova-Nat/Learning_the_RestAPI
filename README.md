# Learning_the_RestAPI
My REST API project on NodeJS

## Установка и запуск. Version 1 (the first commit)
Чтобы воспользоваться сервером, его нужно запустить через командную строку - npm run dev.
Затем нужно отправить POST-запрос с приложения Postman: 
1) Лучше открыть именно локальный сервис Постман, потому что сайт https://www.postman.com/ не мог отправить на locallhost запрос извне из-за блокировки безопасности брэндмауэра.
2) Выбрать адрес http://localhost:8080/api/user
3) Открыть раздел Body, выбрать тип данных raw и JSON
4) Ввести текст в формате JSON:  
{
    "name": "ivan",
    "surname": "meow"
}

## Version 2
Вывести пользователя по Id (getOneUser):  
GET, адрес http://localhost:8080/api/user/2  
{ 
    "id": 2,
    "name": "ilon",
    "surname": "meow"
}

Создать пост (createPost):  
POST, адрес http://localhost:8080/api/post  
{
    "title": "aaa",
    "content": "bbb",
    "userId": 4
}

Вывод постов пользователя по его id (getPostsByUser):  
GET, адрес http://localhost:8080/api/post?id=2  
(без тела)

## Примечания
Команда для Powershell в Постгрес чтобы русские символы отображались корректно:  
psql \! chcp 1251



