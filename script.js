function showText(level) {
  const content = {
    accomplissement: `
      <h3>Besoin d'accomplissement</h3>
      <p>Le besoin d'accomplissement apparaît lorsque le/la mentee souhaite développer ses compétences, exprimer ses talents et construire un projet professionnel qui lui correspond.</p>
      <div class="mentorat">
        <strong>Du point de vue du mentor :</strong><br>
        • Aider à identifier les talents et points forts.<br>
        • Proposer des défis progressifs.<br>
        • Encourager l'autonomie dans les décisions.
      </div>
    `,

    estime: `
      <h3>Besoin d'estime</h3>
      <p>Le besoin d'estime correspond au fait de se sentir reconnu, valorisé et respecté.</p>
      <div class="mentorat">
        <strong>Du point de vue du mentor :</strong><br>
        • Donner des retours constructifs.<br>
        • Valoriser les progrès réalisés.<br>
        • Encourager les initiatives du/de la mentee.
      </div>
    `,

    appartenance: `
      <h3>Besoin d'appartenance</h3>
      <p>Le besoin d'appartenance renvoie au besoin de créer du lien et de faire partie d'un groupe.</p>
      <div class="mentorat">
        <strong>Du point de vue du mentor :</strong><br>
        • Encourager les activités collectives.<br>
        • Faciliter les rencontres.<br>
        • Mettre en lien avec des personnes ressources.
      </div>
    `,

    securite: `
      <h3>Besoin de sécurité</h3>
      <p>Dans le mentorat, ce besoin consiste à se sentir écouté, respecté et accompagné dans un cadre stable et rassurant.</p>
      <div class="mentorat">
        <strong>Du point de vue du mentor :</strong><br>
        • Instaurer un cadre clair.<br>
        • Respecter les rendez-vous.<br>
        • Clarifier les attentes et les objectifs.
      </div>
    `,

    physio: `
      <h3>Besoins physiologiques</h3>
      <p>Ils concernent aussi les conditions matérielles nécessaires pour avancer : espace calme, matériel adapté, connexion internet fiable.</p>
      <div class="mentorat">
        <strong>Du point de vue du mentor :</strong><br>
        • Vérifier les conditions pratiques.<br>
        • Identifier les obstacles matériels.<br>
        • Adapter les objectifs au quotidien du/de la mentee.
      </div>
    `
  };

  document.getElementById("info").innerHTML =
    content[level] || "Aucun contenu trouvé pour ce niveau.";
}
