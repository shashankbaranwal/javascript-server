![]()
# 12 Factor App
##### Code Base :
 One codebase tracked in revision control, many deploys.
- Basically , Tweleve factor app is always tracked in version control system such as Git, Subversion and Mercurial.
- A copy of the revision tracking database that known as a code repository, in shortened to code repo or just repo.
- basically, Codebase is any single repo or any set of repos who share a root commit.
- Codebase is the same across all deploys, although different versions may be active in each deploys.

##### Dependencies :
Explicitly declare and isolate dependencies
- Basically, most programming languages offer a packaging system for distributing suppport libraries, such as CPAN for Perl.
- Your application might rely on external libraries and packages to run. You should never assume that these packages exist on the target system. Instead, your application must declare all dependencies and their correct version explicitly.
- All dependencies should be declared, with no implicit reliance on system tools or libraries. 

##### Config :
Store config in the environment
- Configuration that varies between deployments should be stored in the environment.
- 

##### Backing services :
Treat backing services as attached resources
- All backing services are treated as attached resources and attached and detached by the execution environment.
- Backing services refer to the infrastructure and other services by which the application communicates over the network.
- Database, Message Brokers, other API-accessible consumer services such as Authorization Service, Twitter, GitHub etc., are loosely coupled with the application and treat them as resource.
- The difference here is that you must be able to easily swap the backing service from one provider to another without code changes.

##### Build, release, run :
Strictly separate build and run stages
- A codebase is transformed into a deploy through three stages ...
    1. Build Stage : is fully controlled by the developer. This is where we tag a new release and fix bugs. 
    2. Release Stage : In this stage, an executable build is combined with environment specific configurations, assigned a unique release number, and made ready to execute on the environment.
    3. Run Stage : Finally, the package is executed on an environment using the necessary execution commands. This can be seen as Continuous Deployment once pipeline and all previous stages pass.

##### Processes :
Execute the app as one or more stateless processes
- Applications should be deployed as one or more stateless processes with persisted data stored on a backing service. 
- This factor is focused on executing the app as one or more stateless processes. A Process is an application running on server. An Application can be deployed with multiple instances/processes depending upon the network traffic.

##### Port binding :
Export service by port binding
- Self-contained services should make themselves available to other services by specified ports.
- Your application service should also be accessible via a URL, just as your backing services are. This enables your application to be fully self-contained.

##### Concurrency :
Scale out via the process model
- Concurrency is advocated by scaling individual processes. 
- Every process inside your application should be treated as a first-class citizen. That means that each process should be able to scale, restart, or clone itself when needed. This approach will improve the sustainability and scalability of your application as a whole. 

##### Disposability :
Maximize robustness with fast startup and graceful shutdown
- When you deploy new code, you want the new version to start right away and be able to deal with incoming traffic. This principle is a natural result of the backing services and concurrency principles: after a crash or new deployment, your app should have everything it needs waiting in databases or caches.
- Fast startup and shutdown are advocated for a more robust and resilient system. 

##### Dev/Prod parity :
Keep development, staging, and production as similar as possible
- All environments should be as similar as possible. 
- Your development environment should resemble production as close as possible. That means working on the same operating system, using the same backing services and the same dependencies, and so on.

##### Logs :
 - Applications should produce logs as event streams and leave the execution environment to aggregate. 

 ##### Admin Processes :
 - Any needed admin tasks should be kept in source control and packaged with the application. 