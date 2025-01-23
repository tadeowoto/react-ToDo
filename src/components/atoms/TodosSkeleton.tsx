const TodosSkeleton = () => {
  return (
    <div className="w-full h-16 flex justify-center items-center">
      <style>
        {`
          .loader {
            width: 110px;
            height: 20px;
            -webkit-mask: linear-gradient(90deg,#000 70%,#0000 0) 0/20%;
            background: linear-gradient(#000 0 0) 0/0% no-repeat #ddd;
            animation: l4 2s infinite steps(6);
          }
            
          @keyframes l4 {
            100% {
              background-size: 120%;
            }
          }
        `}
      </style>
      <div className="loader"></div>
    </div>
  );
};

export default TodosSkeleton;
