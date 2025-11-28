export const WorkPage = () => {
  const works = [
    {
      companyname: "Telenor",
      image: "workpage/telenor.png",
      position: "Software developer, Backend",
      about: `Worked as a backend developer during a summer internship, 
              contributing to an in-house development team focused on 
              improving existing code and developing a minimum viable 
              product (MVP). Gained hands-on experience with production-ready code, 
              testing, and implementation. Actively participated in improving the debugging 
              and troubleshooting process for customer- and user-reported issues, 
              leading to more efficient error resolution.`,
      skills: "Kotlin, React, Kafka, Jenkins, Splunk",
    },
    {
      companyname: "NTNU",
      image: "workpage/ntnu.png",
      position: "Student Ambassador",
      about: `As a Student Ambassador for NTNU from October 2022 to May 2025, 
      I represented the university during the National University Tour across various 
      regions including Rogaland, Troms, Finnmark, Bergen, and Trøndelag. 
      My role involved presenting NTNU’s study programs and student life to over 7,000 
      upper secondary school students, as well as answering questions to support their 
      decisions about higher education. In 2024, I served as the team lead for the 
      Trøndelag tour, where I was responsible for planning, coordinating logistics, 
      and acting as a liaison between universities and high schools.`,
      skills: "Project Management, Ambassadorship, Public speaking",
    },
  ];

  return (
    <section id="work" className="pt-10">
      <div className="flex flex-col flex-wrap mx-auto w-6/7">
        <p className="font-inria font-bold text-cerise text-2xl sm:text-4xl mb-5">
          Relevant Experience
        </p>
        <div className="flex justify-center">
          <div className="flex flex-col xl:flex-row justify-evenly gap-x-10 gap-y-10">
            {works.map((work, index) => (
              <div
                key={index}
                className="font-inria flex-col justify-items-center border-4 rounded-3xl border-cerise p-5 sm:p-10 max-w-xl"
              >
                <span className="flex text-cerise text-2xl sm:text-3xl font-bold mb-2">
                  {work.companyname}
                </span>
                <div className="w-32 h-32 flex">
                  <img
                    src={work.image}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="flex text-base sm:text-xl my-5 font-bold ">
                  {work.position}
                </span>
                <span className="flex text-sm sm:text-base text-center">
                  {work.about}
                </span>
                <span className="flex text-royalblue font-bold italic text-center text-sm sm:text-base mt-5">
                  {work.skills}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
