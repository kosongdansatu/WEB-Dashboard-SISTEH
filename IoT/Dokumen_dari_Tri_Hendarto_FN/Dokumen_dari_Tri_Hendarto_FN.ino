#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266HTTPClient.h>
#include <DHT.h>
#include <BlynkSimpleEsp8266.h>

#define DHTPIN 5          // Pin yang digunakan untuk sensor DHT11
#define DHTTYPE DHT11      // Jenis sensor DHT11 yang digunakan

const char* ssid = "Ruang Ko-Kreasi";   // Nama jaringan Wi-Fi
const char* password = "lantai4STP";    // Password jaringan Wi-Fi
const char* server = "api.thingspeak.com"; // Server Thingspeak
String apiKey = "SRRYVONEIMPQR7RQ";            // API Key Thingspeak

WiFiClient client;
DHT dht(DHTPIN, DHTTYPE);

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
  Serial.begin(9600);
  delay(10);

  pinMode(DHTPIN, INPUT);
  dht.begin();

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.print("\n");
  Serial.print("IP address : ");
  Serial.print(WiFi.localIP());
  Serial.print("\n");
  Serial.print("Connect to : ");
  Serial.println(ssid);  
}

void loop() {

  //dht_read
  float h = dht.readHumidity();
  float t = dht.readTemperature();

  //ldr_read
  int ldr = analogRead(A0);
  float light = ((ldr * 100.0) / 1023.0);

  
  if (isnan(h) || isnan(t)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  Serial.print("\n");
  Serial.print(F("Humidity   : "));
  Serial.print(h);
  Serial.print(F("%" ));

  Serial.print("\n");
  Serial.print(F("Temperature: "));
  Serial.print(t);
  Serial.print(F("°C "));
  
  Serial.print("\n");
  Serial.print(F("Intensitas : "));
  Serial.print(light);
  Serial.print(F("%" ));
  Serial.print("\n");    
  delay(100);

  if (client.connect(server, 80)) {
    String postStr = apiKey;
    postStr += "&field1=";
    postStr += String(t);
    postStr += "&field2=";
    postStr += String(h);
    postStr += "&field3=";
    postStr += String(light);
    postStr += "\r\n\r\n";

    client.print("POST /update HTTP/1.1\n");
    client.print("Host: api.thingspeak.com\n");
    client.print("Connection: close\n");
    client.print("X-THINGSPEAKAPIKEY: " + apiKey + "\n");
    client.print("Content-Type: application/x-www-form-urlencoded\n");
    client.print("Content-Length: ");
    client.print(postStr.length());
    client.print("\n\n");
    client.print(postStr);

    Serial.println("Data berhasil dikirim ke Thingspeak!");
  }
  else {
    Serial.println("Koneksi gagal ke Thingspeak!");
  }
  
  delay(10000); // Mengirim data setiap 10 detik
}
