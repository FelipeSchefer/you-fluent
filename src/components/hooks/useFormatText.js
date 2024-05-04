import React from 'react'

const useFormatText = () => {
    const formatText = (text) => {
        const regex = /#([^#]+)#/g;
        const parts = text.split(regex);
        return parts.map((part, index) => {
          if (index % 2 === 1) {
            return <strong key={index}>{part}</strong>;
          } else {
            return part.split('\n').map((item, key) => {
              return <span key={key}>{item}<br/></span>
            });
          }
        });
      }

    return {formatText}
}

export default useFormatText