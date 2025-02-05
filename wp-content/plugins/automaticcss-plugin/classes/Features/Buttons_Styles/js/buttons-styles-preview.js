document.addEventListener('DOMContentLoaded', function(event) {
					
	const prefixes = ['bricks-background-', 'bricks-color-'];
	
	const observer = new MutationObserver((mutationsList) => {
		mutationsList.forEach((mutation) => {							
			const nodes = mutation.type === 'childList' ? mutation.addedNodes : [mutation.target];
			
			nodes.forEach((node) => {
				if ( node.nodeType !== Node.ELEMENT_NODE || !node.classList.contains('bricks-button')) {
					return;
				}

				let has_acss_class = false;

				for (const className of node.classList) {
					prefixes.forEach((prefix) => {
						if (className.startsWith(prefix)) {
							const suffix = className.substring(prefix.length);
							if ( suffix ) {
								has_acss_class = true;
								if ( !node.classList.contains(suffix) ) {
									node.classList.add(suffix);
								}
							}
							
						}
					});

					if ( has_acss_class == true && node.classList.contains('outline') ) {
						node.classList.remove('outline');
						node.classList.add('btn--outline');
						break;
					}
				}
			});
			
		});
	});

	const targetNode = document.body;

	observer.observe(targetNode, {
		childList: true,
		attributes: true,
		subtree: true
	});

});