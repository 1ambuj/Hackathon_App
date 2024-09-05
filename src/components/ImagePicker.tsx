import React, { useState } from "react";
import UploadIcon from "../assets/icons/bxs_cloud-upload.svg?react";
import ImgIcon from '../assets/icons/bi_image-fill.svg?react';
import GreenArrowIcon from '../assets/icons/arrow-green.svg?react';

type ImagePickerPropsT = {
    selectedImgae: string | null;
    onImageChange?: (image: string) => void;
}

const ImagePicker = ({ selectedImgae, onImageChange }: ImagePickerPropsT) => {
  const [img, setImg] = useState<string | null>(selectedImgae);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImg(reader.result as string);
        if(onImageChange) onImageChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
        id="image-picker"
      />
      {img ? (
        <div className="w-[297px] h-[218px] pl-[21px] pt-[22px] pr-[27px] bg-[#F8F9FD] rounded-[10px]">
          <img
            src={img}
            alt="Selected Image"
            className="w-full h-[122px] object-cover rounded-2xl mb-7"
          />
          <label htmlFor="image-picker">
            <div className="flex items-center cursor-pointer">
                <ImgIcon />
              <span className="text-[#44924C] text-sm font-medium leading-5 ml-2 mr-1">
                Change image
              </span>
              <GreenArrowIcon />
            </div>
          </label>
        </div>
      ) : (
        <label htmlFor="image-picker" className="cursor-pointer">
          <div className="w-[236px] h-12 flex items-center justify-center gap-0.5 border border-[#D9D9D9] bg-[#F4F4F4] rounded-[5px]">
            <span className="text-lg leading-5 font-medium text-[#666666]">
              Upload
            </span>
            <UploadIcon />
          </div>
        </label>
      )}
    </div>
  );
};

export default ImagePicker;
