//подключение файла модели объекта музыкального файла
const MusicFile = require('../models/musicFile.js');

//Экспорт функций для рендеринга представлений
module.exports.index = (req, res) => {
    res.render('index', {
        title: 'MusicSearch.Ваши любимые исполнители.',
        isMain: true
    });
}

module.exports.new = (req, res) => {
    res.render('new', {
        title: 'Скачать новинки бесплатно.',
        isNew: true
    });
}

module.exports.artist = (req, res) => {
    res.render('artist', {
        title: 'Скачать песни популярных исполнителей в формате mp3.',
        isArtist: true
    });
}

module.exports.genre = (req, res) => {
    res.render('genre', {
        title: 'Список музыкальных стилей.',
        isStyle: true
    });
}

module.exports.add = (req, res) => {
    res.render('add', {
        title: 'Добавить композицию в плейлист.',
        isAdd: true,
        musicFiles: MusicFile.getAll()
    });
}

module.exports.create = (req, res) => {
    res.render('createAccount', {
        title: 'Регистрация на MusicSearch.'
    });
}

module.exports.exist = (req, res) => {
    res.render('existAccount', {
        title: 'Вход в аккаунт на MusicSearch.'
    });
}