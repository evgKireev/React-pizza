import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={285}
    height={470}
    viewBox="0 0 285 470"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="133" cy="134" r="132" /> 
    <rect x="-1" y="279" rx="10" ry="10" width="280" height="18" /> 
    <rect x="4" y="345" rx="0" ry="0" width="0" height="1" /> 
    <rect x="1" y="308" rx="10" ry="10" width="276" height="80" /> 
    <rect x="8" y="402" rx="10" ry="10" width="100" height="22" /> 
    <rect x="117" y="399" rx="21" ry="21" width="155" height="35" />
  </ContentLoader>
)

export default Skeleton

