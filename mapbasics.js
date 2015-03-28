var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [55.2, 80.28333], // Каргат
        zoom: 9
    });
	myMap.setType('yandex#publicMap');
	ymaps.geoXml.load('https://maps.yandex.ru/export/usermaps/93jfWjoXws37exPmKH-OFIuj3IQduHal/').then(onGeoXmlLoad);
    // Обработчик загрузки XML-файлов.
    function onGeoXmlLoad (res) {
        myMap.geoObjects.add(res.geoObjects);
        if (res.mapState) {
            res.mapState.applyToMap(myMap);
        }
    }	

}
