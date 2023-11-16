# test_01

База PostgreSQL, размещенная в Яндекс.Облако. Инструкции по подключению:

Установите сертификат:
```
mkdir --parents ~/.postgresql && \
wget "https://storage.yandexcloud.net/cloud-certs/CA.pem" \
--output-document ~/.postgresql/root.crt && \
chmod 0600 ~/.postgresql/root.crt
```

Установите зависимости:
```
sudo apt update && sudo apt install --yes nodejs npm && \
npm install pg
```

Запустите код:
```
npm start
```