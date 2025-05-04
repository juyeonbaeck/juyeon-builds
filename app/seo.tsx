import siteMetadata from '@/data/siteMetadata'

export function genPageMetadata({ title, description, image, ...rest }) {
  return {
    title, //// 브라우저 탭 제목
    description: description || siteMetadata.description, // 검색엔진 설명
    openGraph: {
      title: `${title} | ${siteMetadata.title}`, // OG title (SNS 공유 시 제목)
      description: description || siteMetadata.description, // OG description
      url: './',
      siteName: siteMetadata.title,
      images: image ? [image] : [siteMetadata.socialBanner], // OG 이미지
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      title: `${title} | ${siteMetadata.title}`, // 트위터 카드 제목
      card: 'summary_large_image',
      images: image ? [image] : [siteMetadata.socialBanner], // 트위터 카드 이미지
    },
    ...rest,
  }
}
