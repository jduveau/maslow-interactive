function showText(level) {

  const content = {

    accomplissement: `
      <h3>Accomplissement</h3>
      <p>Le besoin d'accomplissement consiste en la capacité qu’à la personne de devenir ce qu’elle est capable de devenir, de réaliser son plein potentiel, être en accord avec ce qu’elle est vraiment.</p>
      <div class="mentorat">
        <strong>Mentorat :</strong><br>
        Développer ses compétences et ses talents, les mettre à profit dans son activité…
      </div>
    `,

    estime: `
      <h3>Estime</h3>
      <p>Le besoin d'estime correspond à la nécessité de se sentir valoriser. Cela implique d’obtenir le respect des autres mais aussi un respect intrinsèque.</p>
      <div class="mentorat">
        <strong>Mentorat :</strong><br>
        Demander et donner du feedback sur ce qui est réalisé en adoptant un vocabulaire d'encouragement et en soulignant les bonnes actions du/de la mentee
      </div>
    `,

    appartenance: `
      <h3>Appartenance</h3>
      <p>Le besoin d’appartenance concerne aussi le besoin d’amour. Chaque personne cherche à créer du lien avec d’autres, à appartenir à un groupe.</p>
      <div class="mentorat">
        <strong>Mentorat :</strong><br>
        participer à des activités collectives stimulantes, rencontrer de nouvelles personnes et créer du lien avec elles.
      </div>
    `,

    securite: `
      <h3>Sécurité</h3>
      <p>Le besoin de sécurité concerne la quête de stabilité, de prévisibilité. La personne cherche à évoluer dans un environnement prévisible, sans imprévus provoqué par une perte d’emploi ou de logement.</p>
      <div class="mentorat">
        <strong>Mentorat :</strong><br>
        (se) rassurer sur ses compétences, (se) donner le droit de les exprimer, donner un espace prévisible et rassurant au/ à la mentee
      </div>
    `,

    physio: `
      <h3>Besoins physiologiques</h3>
      <p>Les besoins physiologiques regroupe les fonctions vitales tel que manger, dormir, respirer, boire.</p>
      <div class="mentorat">
        <strong>Mentorat :</strong><br>
        il peut s’agir au-delà de la faim ou la soif, de (se) donner les conditions matérielles pour réussir son activité (le bon espace, le bon wifi,…)
      </div>
    `
  };

  document.getElementById("info").innerHTML = content[level];
}
