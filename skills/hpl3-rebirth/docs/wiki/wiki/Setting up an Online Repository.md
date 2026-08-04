This article is about '''version control'''. It describes the process of setting up an online Git repository, and discusses the workflow.

{{Note|The sole purpose of the article is to explain how to set a repository up and running. '''Check "See Also" in order to learn how to actually operate and maintain the repository.'''}}<br>

==Introduction==
===Version control===
Version control is the process of maintaing a history of project versions which can be compared and reverted to, if anything goes wrong. A version control system  basically gives you the ability to quickly create a back-up of your changes with a few clicks (this is called a "commit"). Because only the changes from the last commit (version) are recorded, this process if very quick. Loading a commit also loads all of the previous ones, so the project is always preserved in its entirety.

Changes to each file have to be added to a commit before one is created, so if something e.g. gets accidentally deleted, this change can be discarded and the file is restored (this is a much simpler and way faster process than restoring a regular back-up).

===Why do I need an online repository?===
A repository is what records all the changes in a project. Creating a repository ("repo" for short) basically means that you start to monitor changes in a project. It can be stored locally (the repo is essentially a hidden folder in your project folder), but it can also be uploaded online.

'''The biggest benefit of an online repo is the ability to easily combine changes made by all members of a mod team into a single "current" copy.''' It also allows team members to check out the versions of the project that other members are working on.

Another important benefit is having an off-site back-up of your project. If you permanently delete your project folder, the repo (which is stored inside the project folder) will be gone along with it. An online repo lets you get back all your work within minutes, if something like that happens.

If you're working on a mod by yourself, you probably don't need to put your repository online. However, for the reason stated above, it can be safer to have an online one.

==Terminology==
[[File:Git-branch-demonstration.png|alt=|thumb|Git branches are useful to separate your version from the main project version, and later be merged when your work is done. The master branch is blue, and the side branch is green.]]
{| class="wikitable"
|Repository
|The data structure that stores each commit; it is often used as a substitute for the folder which holds the project.
|-
|Commit
|A set of project changes. Commits have to be labelled (this is called a commit message) and each commit should describe what it added or changed. Commits allow to revert unwanted changes and any accidents, as well as see what was changed and when. When something breaks, this possibility makes it much easier to fix. On the graph below, individual dots are commits.
|-
|Check out
|Changing the current version of the project to a specific commit, i.e. "check out a commit".
|-
|Gitlab, Github
|Both are online services that offer to store your repos. At base level they are almost identical, although Github is more popular.
|-
|Branch
|A separate chain of commits; think of it as making your own version of the project, while others make their own ones. You can also have multiple branches made for different purposes. For example, it is advised to create a new branch when you want to test something that might break the project but can't be done in a single commit.
|-
|Clone
|"Download" a repository from the Internet.
|-
|Pull
|"Download" commits from a branch in the online repository. You pull in order to update the project on your end. The action of just downloading commits is called fetching, and pull also tries to automatically merge (see below) the changes.
|-
|Push
|"Upload" your local commits to the online repository. You push in order to update the project on the repository.
|-
|Remote
|The online version of the repository (i.e. what's on Github or Gitlab). Its online address is called an origin.
|-
|Merge
|This means joining two branches. A branch is always merged into another branch (called the target), so only one ends up having all the changes in it. Merging creates a new commit in the target branch.
|-
|Master/Main/Default Branch
|The main version of the project (note: Github and Gitlab now use "main" as the default branch). It is customary to only put stable versions of the project in the master branch. The name master comes from the default branch created along with a fresh repository, but the default branch can be set to any other branch in your online repo; in local repos, the master/main/default branch is essentially the same as any other branch.
|-
|Pull/Merge request
|If you're not an admin on the repo, you won't have the permission to push to the master branch. To have your work merged into the master, you will need to push your branch to the online repo, and then request the merge. This is called a Merge Request on Gitlab and (a bit confusingly) Pull Request on Github.
|-
|Revert
|This basically means "uncommiting" changes; reverting a commit creates a new commit that's the "opposite" of another one. It is also used as a way of saying "check out an older commit (before something was broken) and work from there".
|}

==Getting Started==
The easiest way of starting with git is to use Gitlab or Github.

You will also need a git client (i.e. a program which does all git stuff).
You can use terminal commands (it is not hard but might be challenging if you have never used a terminal before) or [https://git-scm.com/downloads/guis a GUI client].
With many of the GUI apps, you will need to first [https://git-scm.com/ install command line git] anyway.
* If you are using [[Visual Studio Code]] for developing your mod, it has an intuitive GUI for git built-in. It does not have a graph view, but it can be added using a VS Code extension.
* GitKraken - possibly the most intuitive GUI for git, but the free version is limited (your repository on Gitlab/Github cannot be private).
* GitHub Desktop and SourceTree - two other intuitive GUIs.
* Git Cola - a fully free but a bit less intuitive GUI

{{note| The following is an overview meant to be applicable to any git client. If it gets confusing, check out the Gitlab+Gitkraken tutorial below.}}

If you're only starting a mod, create a repo on Gitlab/Github, pull it to your game folder (or custom story folder) and start working on the mod in the newly created repo folder (note that the folder is called the same as your online repo).

What's more likely is that you already have some work put into the mod; you can enable an online repo in two ways then. In both methods you should end up with the repo folder being called the same as your mod folder to avoid issues with your mod.

===The hacky way===

# Create a repository on Gitlab/Github. To make things easier, name the repository the same way as your mod folder.
# Rename your local mod folder to something else (e.g. add a "2" at the end).
# Clone the repo to your game install. For example, to clone a custom story you should clone from the <code>custom_stories</code> folder. This will create a folder named the same as your repo.
# If you did not name the repo same as your mod folder, you can later rename it to anything you want. This will not affect how git works.
# Copy paste your mod contents into the repo folder.
# Add .gitignore (see below).
# Commit all the files and push.

===The proper way===

This method avoids unnecessarily copy-pasting your entire mod, but is a bit more involved on the git side.

Make sure to make the online repo empty when you're creating it on Github/Gitlab. This will display the commands you need to run to create and "sync" a local repo.
The following is a slightly expanded version of what those commands do:
# Initialize a local repository in your mod folder. You should change the initial branch to be called "main", but if you don't, this can be fixed later.
# Add .gitignore (see below).
# Add and commit all your files.
# Add your remote origin repo to the repository. The origin is a link akin to <code>git@github.com:yourusername/yourmod.git</code>.
# If you accidentally added a Readme file, pull from the repo. There should be no conflicts and the branches should merge automatically.
# Push your changes to the repo.

==Workflows==

A popular workflow is to create separate branches for new features (e.g. a new map) and merge them into the master branch when the feature in question is finished.
This way of working can be a bit inconvenient for something like modding where you can rarely separate "features" when making a game.
It can be useful when making sweeping changes to the whole mod which might break it though, like renaming asset folders.

Another workflow is:
* make your changes on the master branch
* when ready to push, pull from the repo first
* resolve conflicts (if any) locally
* fix your local changes if anything broke (e.g. a sound file you're using in a script got renamed; you'll need to change it in the script)
* push your changes

If you're properly coordinating with your teammates, conflicts should be rare.
If working solo, just using the main branch is ok.

==GitKraken and GitLab tutorial==

{{note| The set-up process might seem long and complicated, but you only need to do it once and it will save you a lot of work once you start using version control.}}

#[https://gitlab.com/ Register a free account at GitLab]
#[https://www.gitkraken.com/ Download and install GitKraken Git GUI]

===Creating the Project on GitLab===

# In your dashboard, click the green '''New project''' button or use the plus icon in the navigation bar. This opens the '''New project''' page.
# On the New project page, choose '''blank project.'''
# On the '''Blank project''' tab, provide the following information:
#* The name of your project in the '''Project name''' field. When adding the name, the '''Project slug''' will auto populate. The slug is what the GitLab instance will use as the URL path to the project. If you want a different slug, input the project name first, then change the slug after.
#* The '''Project description (optional)''' field enables you to enter a description for your project’s dashboard, which will help others understand what your project is about. Though it’s not required, it’s a good idea to fill this in.
#* Changing the '''Visibility Level''' modifies the project’s viewing and access rights for users.
#* (Optional) Selecting the Initialize repository with a README option creates a README file so that the Git repository is initialized, has a default branch, and can be cloned.
# Click '''Create project.'''

{{note|Usually, you may want to initialize your project with a '''README''' file, but if you already have an existing mod folder you want to push to git, do not initialize your project with a '''README''' file. Save the project and follow the instructions inside for '''pushing an existing folder'''.}}

===Setting up GitKraken===

#Open GitKraken.
#Go to '''File->Preferences->Authentication'''.
#Select '''GitLab''' and click on '''Connect to GitLab'''.
#Approve the connection.
#It is recommended to generate an SSH key and add it to your GitLab account. [https://www.youtube.com/watch?v=z7jVOenqFYk Here's a guide].

===Cloning the Project using GitKraken===

#Open a new tab if there isn't one open already, and click on '''Clone a Repo''' and then '''GitLab'''
#In '''Where to clone to, n'''avigate to the directory in which you want to place the mod folder at.
#Select the '''Repository to clone''' and click on '''Clone the repo!'''
#Wait until the files are copied. When it's done, a prompt will show up to open the repo in the app - click on it to open the repository window.
#You can now create branches, commit, pull and push your changes via GitKraken!

==HPL Engine Specifics==
When it comes to modding on the HPL engine, the following files should be added to the [https://git-scm.com/docs/gitignore .gitignore file]:

<pre>
*.map_cache
*.preload_cache
</pre>

The files on the gitignore list won't show up in your changes list between commits, making it much less cluttered.
However, remember that you should still include these files in your mod release.

Another thing to note is that unlike HPL3, HPL2's map format is not designed with version control in mind.
This means that if you and your teammate both change the same map, the changes might be impossible to merge.
As such, you should avoid working on the same maps at the same time.

==See Also==

Videos:
* [https://youtu.be/hwP7WQkmECE?si=nu8cDNFgEoXaO-_G Git explained in 100 seconds]
* [https://www.youtube.com/watch?v=HVsySz-h9r4 Git Tutorial: Command-line Fundamentals]
* [https://www.youtube.com/watch?v=ub9GfRziCtU GitKraken Tutorial For Beginners]

[[Category:Modding]]