from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.chrome.options import Options
import time

# Configurar Selenium con Chrome
options = Options()
options.add_argument('--headless')  # Opcional: para ejecutar en modo sin cabeza (sin abrir el navegador visualmente)
options.add_argument('--disable-gpu')
options.add_argument('--no-sandbox')

# RUTA a tu webdriver de Chrome
service = Service('/ruta/a/chromedriver')  # Cambia esto por la ubicación de tu driver

driver = webdriver.Chrome(service=service, options=options)

try:
    # URL de la página a extraer
    url = 'https://example.com/pagina-de-libros'  # Cambia a la URL de tu interés
    driver.get(url)
    time.sleep(2)  # Esperar a que la página cargue

    # Extraer enlaces de descarga de libros
    enlaces = driver.find_elements(By.CSS_SELECTOR, 'a.btn.btn-default.addDownloadedBook')
    for enlace in enlaces:
        href = enlace.get_attribute('href')
        extension = enlace.find_element(By.CLASS_NAME, 'book-property__extension').text
        print(f"Enlace de descarga: {href} ({extension})")

    # Extraer imágenes de los libros (si están relacionadas)
    imagenes = driver.find_elements(By.TAG_NAME, 'img')
    for img in imagenes:
        src = img.get_attribute('src')
        print(f"URL de imagen: {src}")

finally:
    driver.quit()