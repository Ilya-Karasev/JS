function lockedProfile() {
    document.querySelectorAll('.profile').forEach(profile => {
        profile.querySelector('button').addEventListener('click', function() {
            if (profile.querySelector('input[value="unlock"]').checked) {
                if (profile.querySelector('[id^=user]').style.display == 'none') {
                    profile.querySelector('[id^=user]').style.display = 'block'
                    profile.querySelector('button').textContent = 'Hide it'
                } else {
                    profile.querySelector('[id^=user]').style.display = 'none'
                    profile.querySelector('button').textContent = 'Show more'
                }
            }
        })
        profile.querySelector('input[value="lock"]').addEventListener('change', function() {
            profile.querySelector('[id^=user]').style.display = 'none'
            profile.querySelector('button').textContent = 'Show more'
        })
        profile.querySelector('input[value="unlock"]').addEventListener('change', function() {
            profile.querySelector('[id^=user]').style.display = 'none'
            profile.querySelector('button').textContent = 'Show more'
        })
    })
}