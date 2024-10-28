I worked on a computer vision project a few years ago. It was supposed to be a scalable solution to be implemented across the complete industrial environment. Sadly, it was a complete failure. The frontend was written in React and the backend with Python, as we needed the optimized numeric operations from PyTorch to run the deep learning model smoothly.
This trained model required to be run using a GPU and that (alongside a complete lack of organization and awareness of DevOps methodologies) turned out to be the first step in a nightmarish ladder which led us nowhere in the end.
We were supposed to implement CI/CD as part our our development pipeline and as such we chose AWS and in particular CodeDeploy for building, testing and deployment. However, the testing team had very limited understanding about how deep learning works and could not figure out a way to actually test the backend. In addition to this, there was this intense toxic competition between the frontend and backend leads who were always assigning responsibility for late deliveries on each other, and as a result, kept on escalating their promises without actually covering the technical debt first.
The integrated systems team was in control of CI and as such, set up CodeCommit as the means to implement CI. However, and even though it's part of the AWS environment, they never tried to configure CodeDeploy with it from the beginning. Things went from bad to worse when business decided they wanted to use Google Lens as opposed to a conventional camera to capture the images.
What should have been a pretty standard testing practice applied to the backend using Jenkins (standard in the sense that we should have used it given we were using custom hardware e.g. GPU) ended up being non existing because of the sudden change to Google Lens. If it had been done quite tedious to configure the GPU with the conventional cameras, it proved almost close to impossible with the lenses, whose resolution is pretty dismal.
Given the complexities of the system overall, I believe the correct choice would have been to set up a self hosted CI/CD environment, but given that not even leadership was sure about how a successful outcome would look like, it ended up being discarded altogether, leading to an ever increasing collection of commits without code review which did not break entirely the 'solution', though it achieved absolutely nothing in the end.
Soon afterwards I started reading the Phoenix Project and felt as if I was reliving this whole experience once again.
I'm glad I found this course because now I'm familiar with DevOps theory, but it's time to put on some practice time.