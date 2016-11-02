Instalcja express i body_parser
1) W katalogu progr_zesp_server otwórz cmd i wpisz 'npm install express' -> enter, a natêpnie wpisz 'npm install body-parser' -> enter
2) powtórz w katalogu progr_zesp


Odpalenie projektu:
    I. Front-end:
	1) przechodzimy do katalogu progr_zesp i odpalamy cmd
	2) wpisujemy 'node frontEndServer.js'
	3) uruchamia siê serwer i mo¿emy w przegl¹darce wpisaæ 'localhost:3000'
	4) front end dzia³a
    II. Back-end:
	1) przechodzimy do katalogu progr_zesp_server i odpalamy cmd
	2) wpisujemy 'node backEndServer.js'
	3) back end dzia³a

UWAGA!:
	Poniewa¿ node.js wymaga ka¿dorazowego prze³adowanie po jakiejkolwiek zmianie, dobrze jest zainstalowaæ sobie coœ w stylu nodemon
'npm install nodemon -g' (-g instaluje globalnie)
apke odpalamy wtedy: 'nodemon fronEndServer.js' i analogicznie 'nodemon backEndServer.js'

Baza danych:
1) Pobierz XAMPP i zainstaluj
2) Uruchom jako Administrator, zainstaluj i uruchom Apache oraz mysql service
3) Kliknij 'Admin' obok mysql (odpali siê phpMyAdmmin)
4) Klik na mysql i 'Import' na pasku na œrodku na górze 
5) Podaj œcie¿kê do room_reservation.sql i kliknij OK
6) Enjoy

