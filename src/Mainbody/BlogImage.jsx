const BlogImage = ({ title, bgColor, author, icon, fontStyle }) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="flex flex-row w-full h-60 p-6 py-12 md:h-80 md:py-12 md:px-16 text-gray-600 "
    >
      <div
        className={`w-full bg-white flex p-8 pl-2 md:p-12 md:pr-8 rounded-lg ${fontStyle}`}
      >
        <i
          className={`devicon-${icon.value}-plain text-5xl m-2 mr-2 md:text-8xl md:m-4 md:mr-5 flex items-center`}
        ></i>
        <div className="flex flex-col justify-center">
          <h1 className={`text-lg md:text-4xl mb-4 `}>{title}</h1>
          <hr className="border-2 bg-gray-800 w-1/2 mb-2" />
          <h3 className={`md:text-3xl font-bold ${fontStyle}`}>{author}</h3>
        </div>
      </div>
    </div>
  );
};

export default BlogImage;
