export default function SubjectPage({ params }) {
    const { sem, subject } = params;
    const decodedSubject = decodeURIComponent(subject);
  
    return (
      <div className="container mx-auto text-center my-10">
        <h1 className="text-3xl font-bold mb-4">
          Semester {sem} - {decodedSubject}
        </h1>
        <p className="text-lg text-white ">
          Study materials and resources for <span className="font-semibold">{decodedSubject}</span> will be available here.
          
        </p>
      </div>
    );
  }
  