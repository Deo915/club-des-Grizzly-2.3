<script>
      function initMap() {
        // La localisation du Centre de Réflexologie à Godomey, Cotonou
        var location = { lat: 6.3885931, lng: 2.3405636 }
        // Créez la carte, centrée sur la localisation
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12, // Niveau de zoom
          center: location
        })
        // Créez un marqueur à la localisation
        var marker = new google.maps.Marker({
          position: location,
          map: map
        })
      }

      // Initialisez la carte lorsque la fenêtre se charge
      window.onload = initMap;
</script>