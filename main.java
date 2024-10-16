import com.codename1.ui.Form;
import com.codename1.ui.Button;
import com.codename1.ui.Container;
import com.codename1.ui.Label;
import com.codename1.ui.TextField;
import com.codename1.ui.layouts.BorderLayout;
import com.codename1.ui.layouts.BoxLayout;
import com.codename1.ui.Toolbar;
import com.codename1.ui.plaf.UIManager;
import com.codename1.ui.util.Resources;
import com.codename1.ui.layouts.GridLayout;
import com.codename1.components.FloatingActionButton;
import com.codename1.ui.FontImage;
import com.codename1.ui.tabs.Tabs;

public class Main {

    private Form homePage;

    public void init(Object context) {
        Resources theme = UIManager.initFirstTheme("/theme");
    }

    public void start() {
        if (homePage != null) {
            homePage.show();
            return;
        }

        // Create the home page form with a BoxLayout (vertical)
        homePage = new Form("Productivity App", new BorderLayout());

        // Top-right profile name and coins
        Container topBar = new Container(new BorderLayout());
        Label profileName = new Label("Profile Name"); // Placeholder for profile name
        Label coins = new Label("Coins: 50"); // Placeholder for coins collected
        topBar.add(BorderLayout.WEST, profileName);
        topBar.add(BorderLayout.EAST, coins);

        // Search bar
        TextField searchBar = new TextField("", "Search...", 20, TextField.ANY);
        searchBar.setHintIcon(FontImage.createMaterial(FontImage.MATERIAL_SEARCH, searchBar.getUnselectedStyle()));

        // Upcoming Workshops section with video placeholders
        Label upcomingWorkshops = new Label("Upcoming Workshops");
        Container videosContainer = new Container(new BoxLayout(BoxLayout.Y_AXIS));
        for (int i = 1; i <= 3; i++) {
            // Placeholder for video blocks
            Button video = new Button("Workshop Video " + i);
            videosContainer.add(video);
        }

        // Main content container
        Container mainContent = new Container(new BoxLayout(BoxLayout.Y_AXIS));
        mainContent.addAll(searchBar, upcomingWorkshops, videosContainer);

        // Bottom navigation tabs
        Tabs bottomTabs = new Tabs();
        bottomTabs.addTab("Planner", FontImage.createMaterial(FontImage.MATERIAL_EVENT_NOTE, UIManager.getInstance().getComponentStyle("Tab")), new Label("Planner Tab"));
        bottomTabs.addTab("Workshops", FontImage.createMaterial(FontImage.MATERIAL_VIDEOCAM, UIManager.getInstance().getComponentStyle("Tab")), new Label("Workshops Tab"));
        bottomTabs.addTab("Courses", FontImage.createMaterial(FontImage.MATERIAL_SCHOOL, UIManager.getInstance().getComponentStyle("Tab")), new Label("Courses Tab"));
        bottomTabs.addTab("Premium", FontImage.createMaterial(FontImage.MATERIAL_STAR, UIManager.getInstance().getComponentStyle("Tab")), new Label("Premium Tab"));

        // Adding top bar, main content, and bottom tabs to the form
        homePage.add(BorderLayout.NORTH, topBar);
        homePage.add(BorderLayout.CENTER, mainContent);
        homePage.add(BorderLayout.SOUTH, bottomTabs);

        // Show the home page
        homePage.show();
    }

    public void stop() {
        homePage = getCurrentForm();
    }

    public void destroy() {
    }
}
