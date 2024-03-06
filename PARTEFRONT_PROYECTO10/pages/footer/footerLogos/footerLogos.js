import './footerLogos.css';

const footerLogos = () => {
  const footerDiv = document.createElement('div');
  const githubLogo = document.createElement('img');
  const githubLink = document.createElement('a');
  const linkedinLogo = document.createElement('img');
  const linkedinLink = document.createElement('a');
  const netlifyLogo = document.createElement('img');
  const netlifyLink = document.createElement('a');

  githubLink.href = 'https://github.com/AaronSinergia';
  linkedinLink.href = 'https://www.linkedin.com/in/aaron-carrasco-romero/';
  netlifyLink.href = 'https://app.netlify.com/teams/aaronsinergia/overview';

  githubLink.target = '_blank';
  linkedinLink.target = '_blank';
  netlifyLink.target = '_blank';

  githubLogo.alt = 'github';
  linkedinLogo.alt = 'linkedin';
  netlifyLogo.alt = 'netlify';

  githubLogo.src = '../assets/GitHubLogo.png';
  linkedinLogo.src = '../assets/linkedin.png';
  netlifyLogo.src = '../assets/netlify_logo_icon_169924.png';

  githubLogo.className = 'github_logo';
  linkedinLogo.className = 'linkedin_logo';
  netlifyLogo.className = 'netlify_logo';
  footerDiv.className = 'logos_rrss_div';

  githubLink.appendChild(githubLogo);
  linkedinLink.appendChild(linkedinLogo);
  netlifyLink.appendChild(netlifyLogo);

  footerDiv.appendChild(githubLink);
  footerDiv.appendChild(linkedinLink);
  footerDiv.appendChild(netlifyLink);

  return footerDiv;
};

export default footerLogos;
