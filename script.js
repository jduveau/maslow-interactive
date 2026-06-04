function showText(level) {
  const content = {
    accomplissement: `
      <h3>Besoin d'accomplissement</h3>
    <p>Le besoin d'accomplissement apparaît lorsque le/la mentee souhaite non seulement accéder à l'emploi, mais aussi développer ses compétences, exprimer ses talents et construire un projet professionnel qui lui correspond.</p>

    <div class="mentee">
      <strong>Du point de vue du/de la mentee :</strong><br>
      Développer ses compétences et ses talents, les mettre à profit dans son activité et construire un projet professionnel qui lui ressemble.
    </div>

    <div class="mentor">
      <strong>Du point de vue du mentor :</strong><br>
      • Aider le/la mentee à identifier ses talents et ses points forts.<br>
      • Encourager l'apprentissage et la montée en compétences.<br>
      • Proposer des défis progressifs adaptés à son niveau.<br>
      • Soutenir l'exploration de nouvelles opportunités professionnelles.<br>
      • Favoriser l'autonomie dans les prises de décision.
    </div>
  `,

    estime: `
       <h3>Besoin d'estime</h3>
    <p>Le besoin d'estime correspond à la nécessité de se sentir reconnu, valorisé et respecté. Il contribue directement à la confiance en soi et à la motivation.</p>

    <div class="mentee">
      <strong>Du point de vue du/de la mentee :</strong><br>
      Recevoir un feedback valorisant sur ce qui a été réalisé, recevoir des encouragements et une mise en avant des bonnes actions du/de la mentee.
    </div>

    <div class="mentor">
      <strong>Du point de vue du mentor :</strong><br>
      • Donner des retours constructifs et réguliers.<br>
      • Souligner les progrès accomplis.<br>
      • Valoriser les compétences observées durant l'accompagnement.<br>
      • Encourager les initiatives prises par le/la mentee.<br>
      • Célébrer les étapes importantes du parcours.
    </div>
  `,

    appartenance: `
     <h3>Besoin d'appartenance</h3>
    <p>Le besoin d'appartenance renvoie au besoin de créer du lien, d'être accepté par les autres et de faire partie d'un groupe ou d'une communauté.</p>

    <div class="mentee">
      <strong>Du point de vue du/de la mentee :</strong><br>
      Participer à des activités collectives stimulantes, rencontrer de nouvelles personnes et créer du lien avec elles.
    </div>

    <div class="mentor">
      <strong>Du point de vue du mentor :</strong><br>
      • Encourager la participation à des activités collectives.<br>
      • Faciliter les rencontres et le réseautage.<br>
      • Mettre le/la mentee en relation avec des personnes ressources.<br>
      • Favoriser les échanges d'expériences.<br>
      • Créer une relation mentorale chaleureuse et bienveillante.
    </div>
  `,

    securite: `
       <h3>Besoin de sécurité</h3>
    <p>Le besoin de sécurité concerne la recherche de stabilité, de prévisibilité et de protection. Dans le mentorat, il se traduit par l'existence d'un cadre clair et rassurant.</p>

    <div class="mentee">
      <strong>Du point de vue du/de la mentee :</strong><br>
      Se sentir écouté, respecté et accompagné dans un cadre stable et rassurant afin de pouvoir avancer sereinement, sans imprévus majeurs.
    </div>

    <div class="mentor">
      <strong>Du point de vue du mentor :</strong><br>
      • Instaurer un cadre clair dès le début de l'accompagnement.<br>
      • Respecter les rendez-vous et les engagements pris.<br>
      • Clarifier les attentes et les objectifs du mentorat.<br>
      • Être à l'écoute des préoccupations du/de la mentee.<br>
      • Aider à planifier les démarches étape par étape.
    </div>
  `,

    physio: `
     <h3>Besoins physiologiques</h3>
    <p>Les besoins physiologiques regroupent les besoins essentiels à la vie. Dans le cadre du mentorat, ils peuvent également concerner les conditions matérielles nécessaires pour mener efficacement ses démarches.</p>

    <div class="mentee">
      <strong>Du point de vue du/de la mentee :</strong><br>
      Il peut s'agir, au-delà de la faim ou de la soif, de se donner les conditions matérielles nécessaires pour réussir son activité : disposer du bon espace, du bon matériel ou d'une connexion internet adaptée.
    </div>

    <div class="mentor">
      <strong>Du point de vue du mentor :</strong><br>
      • Vérifier que les conditions matérielles sont réunies pour avancer sereinement.<br>
      • Identifier les obstacles pratiques qui freinent les démarches.<br>
      • Adapter les objectifs aux réalités du quotidien.<br>
      • Orienter vers des ressources adaptées lorsque cela est nécessaire.<br>
      • Encourager l'organisation et la préparation des activités.
    </div>
  `
  };

  document.getElementById("info").innerHTML =
    content[level] || "Aucun contenu trouvé pour ce niveau.";
}
