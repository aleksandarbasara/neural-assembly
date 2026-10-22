export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Jay Doe';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Next.js Blog Theme';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved.';
  const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || 'https://neural-assembly.com'
  ).replace(/\/+$/, '');
  const organizationName =
    process.env.BLOG_ORGANIZATION_NAME || 'Neural Assembly';
  const organizationLogoUrl =
    process.env.BLOG_ORGANIZATION_LOGO_URL ||
    `${siteUrl}/neural_assembly_logo.svg`;

  return {
    name,
    blogTitle,
    footerText,
    siteUrl,
    organizationName,
    organizationLogoUrl,
  };
};
