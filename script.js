document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });
    
    // Dropdown functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            e.stopPropagation();
            const content = this.querySelector('.dropdown-content');
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.style.display = 'none';
        });
    });
    
    // New post button functionality
    const newPostBtn = document.querySelector('.new-post');
    newPostBtn.addEventListener('click', function() {
        alert('Create new post functionality would go here');
    });
    
    // Edit profile button functionality
    const editProfileBtn = document.querySelector('.edit-profile');
    editProfileBtn.addEventListener('click', function() {
        alert('Edit profile functionality would go here');
    });
});

// Posts
document.addEventListener('DOMContentLoaded', function() {
    // Back button functionality
    const backButton = document.querySelector('.back-button');
    backButton.addEventListener('click', function() {
        // In a real app, this would navigate back to the previous page
        console.log('Navigating back to profile');
        // window.history.back(); // Uncomment this in a real multi-page app
    });
    
    // Like button functionality
    const likeButton = document.querySelector('.left-actions .fa-heart');
    likeButton.addEventListener('click', function() {
        this.classList.toggle('far');
        this.classList.toggle('fas');
        this.classList.toggle('liked');
        
        // Update like count (simplified for demo)
        const likesCount = document.querySelector('.post-likes span');
        if (this.classList.contains('liked')) {
            likesCount.textContent = '1,434 likes';
        } else {
            likesCount.textContent = '1,433 likes';
        }
    });
    
    // Comment posting functionality
    const commentInput = document.querySelector('.comment-input');
    const postButton = document.querySelector('.post-button');
    
    commentInput.addEventListener('input', function() {
        postButton.disabled = this.value.trim() === '';
    });
    
    postButton.addEventListener('click', function() {
        if (commentInput.value.trim() === '') return;
        
        const commentsContainer = document.querySelector('.post-comments');
        const newComment = document.createElement('div');
        newComment.className = 'comment';
        
        // In a real app, this would be the current user's username
        newComment.innerHTML = `
            <span class="comment-username">You</span>
            <span class="comment-text">${commentInput.value}</span>
        `;
        
        commentsContainer.appendChild(newComment);
        commentInput.value = '';
        postButton.disabled = true;
    });
    
    // Allow pressing Enter to post comment
    commentInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && this.value.trim() !== '') {
            postButton.click();
        }
    });
});

// Add this to your existing profile page script.js
document.querySelectorAll('.post').forEach(post => {
    post.addEventListener('click', function() {
        // Option 1: Navigate to a post detail page
        // window.location.href = 'post.html?id=123'; // You'd need to create this page
        
        // Option 2: Show a modal (simpler implementation)
        const modal = document.createElement('div');
        modal.className = 'post-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <!-- Copy the post detail HTML structure here -->
                <button class="close-modal">&times;</button>
                <!-- Rest of post detail content -->
            </div>
        `;
        
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
        
        // Close modal when clicking X or outside
        modal.querySelector('.close-modal').addEventListener('click', () => {
            document.body.removeChild(modal);
            document.body.style.overflow = '';
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
                document.body.style.overflow = '';
            }
        });
    });
});