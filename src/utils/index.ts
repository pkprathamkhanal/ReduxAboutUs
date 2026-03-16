export function createPageUrl(pageName: string) {
  const formattedPage = pageName.replace(/ /g, '-');

  if (formattedPage === 'Home') {
    return '/ReduxAboutUs/';
  }

  return '/ReduxAboutUs/' + formattedPage;
}
