// "use client";
// import React from "react";
// import styled from "styled-components";
// import { SwiperSlide } from "swiper/element";
// import Swiper from "swiper";
// import { Mousewheel } from "swiper/modules";
// import { useEffect, useState, memo } from "react";

// function CategoryRows() {
//   // useEffect(() => {
//   // Set the first category as active when the component mounts
//   //   if (hotCategories && hotCategories.length > 0) {
//   //     setActiveCategory(hotCategories[0]);
//   //   }
//   // }, [hotCategories]);

//   // useEffect(() => {
//   //   if (activeCategory?.id) {
//   //     axios
//   //       .post(`${backUrl}/hot-categories-kroudis/${activeCategory.id}`, null)
//   //       .then((res) => {
//   //         setHotCategoryKroudis(res.data);
//   //         setHotCategoryPhoto(res.data[0]?.sub_sub_category?.photo_path);
//   //       })
//   //       .catch((err) => {
//   //         console.log("error", err);
//   //       });
//   //   }
//   // }, [activeCategory]);

//   // const handleCategoryClick = (category) => {
//   //   if (category.id === activeCategory.id && activeCategory.id !== null) {
//   //     return;
//   //   } else {
//   //     // setActiveCategoryId(category.id === activeCategory.id ? null : category);
//   //     setActiveCategory(category);
//   //   }
//   // };
//   return (
//     <TouchSliderContainer>
//       <Swiper
//       // direction="horizontal"
//       // slidesPerView={"auto"}
//       // grabCursor={true}
//       // mousewheel={true}
//       // modules={[Mousewheel]}
//       // className="mySwiper"
//       >
//         {hotCategories?.map((category) => (
//           <SwiperSlide key={category.id}>
//             <CategoryButton
//               onClick={() => handleCategoryClick(category)}
//               style={
//                 category.id === activeCategory?.id ? activeStyle : inactiveStyle
//               }
//             >
//               {category.name}
//             </CategoryButton>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </TouchSliderContainer>
//   );
// }

// export default CategoryRows;

// const TouchSliderContainer = styled.div`
//   height: 114px;
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   margin: 0 0 60px 0;
//   gap: 20px;
// `;

// const CategoryButton = styled.div`
//   width: fit-content;

//   border: 1px solid var(--categoryBorder);
//   font-weight: 400;
//   font-size: 18px;

//   display: flex;
//   align-items: center;
//   justify-content: center;

//   /* color: var(--black); */
//   border-radius: 15px;

//   padding: 15px 25px;
//   cursor: pointer;

//   @media screen and (min-width: 800px) {
//     /* max-width: 150px; */
//     font-size: 20px;
//   }

//   @media screen and (min-width: 1100px) {
//     padding: 15px 32px;
//   }

//   @media screen and (min-width: 1300px) {
//     border-radius: 20px;
//   }
// `;
