from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.edge.service import Service

# Ruta al msedgedriver.exe
service = Service(r'C:\Users\Tito\Desktop\PROYECTOS\BIBLIOTECA\msedgedriver.exe')
options = webdriver.EdgeOptions()
options.add_argument('--headless')  # Opcional, si no quieres ver el navegador

# Inicialización del navegador
driver = webdriver.Edge(service=service, options=options)

# URL del libro
url = "https://es.z-lib.gs/"

# Abriendo la página
driver.get(url)

# Esperamos que el botón de descarga esté visible (utilizamos WebDriverWait)
try:
    download_link_element = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//a[contains(@href, '/dl/18183287/') and contains(@class, 'addDownloadedBook')]"))
    )
    
    # Extraemos el enlace de descarga (href)
    download_link = download_link_element.get_attribute('href')
    print(f"Link de descarga: {download_link}")
    
except Exception as e:
    print("Error al esperar por el enlace de descarga:", e)

# Cerrar el navegador
driver.quit()
