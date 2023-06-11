

const ForDocumentTab = () => {
  return (
    <div className="w-[90%] mx-auto px-3 border h-auto rounded-xl p-7">
        <div className="text-center text-3xl mb-1 ">Choose a Document</div>
        <div className="text-center text-gray-500 mb-5 ">Upload a .docx, .pdf, .pptx, or .xlsx</div>
        <div className="bg-blue-600 hover:bg-blue-700 text-white border rounded-md h-8 m-auto text-sm w-40 mt-3 pt-1 mb-5 text-bold flex justify-center">Browse Your Computer</div>
        <div className="flex justify-center mt-10">
            <img src="https://tse1.mm.bing.net/th?id=OIP.B8ovMiQN38kbeu-4yK0-VAHaHa&pid=Api&rs=1&c=1&qlt=95&w=109&h=109" alt="google-cloud-logo" className="h-4 w-4 mt-[2px] mr-4"/>
            <p className="text-xs text-gray-500 mr-2">Powered by <span className="text-xs hover:underline text-blue-500">Google Cloud Translation</span></p>
        </div>
    </div>
  )
}

export default ForDocumentTab