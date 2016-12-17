Dodawanie nowych podstron do projektu:
1) w katalogu progr_zesp tworzymy katalog z nazwą podstrony, np. users
2) tworzymy dwa pliki, jeden z html, np. users.tpl.html oraz users.controller.js
3) mozemy narazie skopiować zawartość plików z innych, ALE trzeba pamiętać o dodaniu w index.html nowego <script> z ścieżką do pliku js ORAZ o nadaniu kontrolerowi jakiejś nazwy np. usersCtrl

Jeśli chcemy pobrac dane z bazy:
1) musimy wysłać $http.post lub $http.get (patrz: registration)
2) w katalogu progr_zesp_server/routes powinien być plik w którym jest obsługa $http.post/get (patrz: registration)
3) do pliku backEndServer.js dodajemy linijkę z required(./nazwapliku.js)(serverApp, database) (na dole w pliku przykład)
4) wykorzystujemy funkcję np. database.insert(query)
5) kiedy funkcja zwróci wartość musimy wysłać response


Instalcja express i body_parser
1) W katalogu progr_zesp_server otwórz cmd i wpisz 'npm install express' -> enter, a natępnie wpisz 'npm install body-parser' -> enter
2) powtórz w katalogu progr_zesp


Odpalenie projektu:
    I. Front-end:
	1) przechodzimy do katalogu progr_zesp i odpalamy cmd
	2) wpisujemy 'node frontEndServer.js'
	3) uruchamia się serwer i możemy w przeglądarce wpisać 'localhost:3000'
	4) front end działa
    II. Back-end:
	1) przechodzimy do katalogu progr_zesp_server i odpalamy cmd
	2) wpisujemy 'node backEndServer.js'
	3) back end działa

UWAGA!:
	Ponieważ node.js wymaga każdorazowego przeładowanie po jakiejkolwiek zmianie, dobrze jest zainstalować sobie coś w stylu nodemon
'npm install nodemon -g' (-g instaluje globalnie)
apke odpalamy wtedy: 'nodemon fronEndServer.js' i analogicznie 'nodemon backEndServer.js'

Baza danych:
1) Pobierz XAMPP i zainstaluj
2) Uruchom jako Administrator, zainstaluj i uruchom Apache oraz mysql service
3) Kliknij 'Admin' obok mysql (odpali się phpMyAdmmin)
4) Klik na mysql i 'Import' na pasku na środku na górze 
5) Podaj ścieżkę do room_reservation.sql i kliknij OK
6) Enjoy


MySql - JS connector:
https://www.sitepoint.com/using-node-mysql-javascript-client/

DayPilot - opis/demo/przydatne rzeczy do biblioteki od kalendarza (widok dnia):
https://doc.daypilot.org/calendar/angularjs/
