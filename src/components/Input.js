import React from "react";

function Input({ label, register, type }) {
  return (
    <div className='w-full rounded-[10px] bg-lightGrey p-2 px-4 focus-within:ring-2'>
      <label htmlFor={label} className='text-sm font-medium text-[#8A8A8A]'>
        {label}
      </label>
      {type === "select" && (
        <select
          {...register}
          className='block w-full bg-lightGrey font-sora text-lg focus:outline-none'
        >
          {["100", "200", "300", "400", "500"].map((item, index) => (
            <option value={item} key={index}>
              {item} Level
            </option>
          ))}
        </select>
      )}

      {type === "textarea" && (
        <textarea
          name=''
          id=''
          cols='10'
          rows='2'
          {...register}
          className='block w-full resize-none appearance-none bg-lightGrey font-sora text-lg focus:outline-none'
        ></textarea>
      )}

      {!type && (
        <input
          type='text'
          {...register}
          className='block w-full appearance-none bg-lightGrey font-sora text-lg focus:outline-none'
        />
      )}
    </div>
  );
}

export default Input;
